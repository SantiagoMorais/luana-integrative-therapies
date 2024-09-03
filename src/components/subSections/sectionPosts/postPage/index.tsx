import { useQuery } from "@apollo/client";
// import { ErrorPage } from "@components/equilibriumSection/errorPage";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import {
   GET_EQUILIBRIUM_POST_BY_ID_QUERY,
   GET_SEGREDOS_DA_LUA_POST_BY_ID_QUERY,
} from "@utils/blogAPI";
import { IEquilibriumPostById } from "@utils/equilibriumBlogInterfaces";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
// import { Content } from "./content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { ISegredosDaLuaPostById } from "@utils/moonsSecretsBlogInterfaces";
import { PostContent } from "./postContent";
import { ErrorPage } from "@components/subSections/errorPage";

const isEquilibriumPost = (
   data: IEquilibriumPostById | ISegredosDaLuaPostById | undefined
): data is IEquilibriumPostById => {
   return (data as IEquilibriumPostById)?.equilibriumPost !== undefined;
};

const isSegredosDaLuaPost = (
   data: IEquilibriumPostById | ISegredosDaLuaPostById | undefined
): data is ISegredosDaLuaPostById => {
   return (data as ISegredosDaLuaPostById)?.segredosDaLuaPost !== undefined;
};

export const PostPage = () => {
   const { id } = useParams();
   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];
   
   const { data, loading, error } = useQuery<
      IEquilibriumPostById | ISegredosDaLuaPostById
   >(
      locationName === "equilibrium"
         ? GET_EQUILIBRIUM_POST_BY_ID_QUERY
         : GET_SEGREDOS_DA_LUA_POST_BY_ID_QUERY,
      {
         variables: { id },
      }
   );

   return (
      <Container>
         <Header />
         {loading ? (
            <div className="loadingContainer">
               <div className="loading">
                  <FontAwesomeIcon
                     icon={faHourglassHalf}
                     spin
                     className="icon"
                  />
               </div>
               <p className="loadingMessage">Carregando...</p>
            </div>
         ) : error ? (
            <ErrorPage />
         ) :
         isEquilibriumPost(data) ? (
            <PostContent data={data.equilibriumPost} />
         ) :
         isSegredosDaLuaPost(data) ? (
            <PostContent data={data.segredosDaLuaPost} />
         ) : (
            <ErrorPage />
         )}
         <Footer />
      </Container>
   );
};

const Container = styled.section`
   display: flex;
   flex-direction: column;
   height: 100dvh;

   .loadingContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      justify-content: center;

      .loading {
         color: ${theme.shadowColor};
         border: solid 0.2rem ${theme.shadowColor};
         box-shadow: 0 0 1rem ${theme.shadowColor};
         border-radius: 50%;
         width: 6rem;
         height: 6rem;
         display: flex;
         justify-content: center;
         align-items: center;

         .icon {
            font-size: ${fontSize.extraLargeSize};
         }
      }

      .loadingMessage {
         font-size: ${fontSize.mediumSize};
         color: ${theme.shadowColor};
         font-weight: ${fontWeight.medium};
      }
   }
`;
