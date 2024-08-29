import { useQuery } from "@apollo/client";
import { ErrorPage } from "@components/equilibriumSection/errorPage";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { GET_EQUILIBRIUM_POST_BY_ID_QUERY } from "@utils/blogAPI";
import { IEquilibriumPostById } from "@utils/equilibriumBlogInterfaces";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Content } from "./content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { fontSize, fontWeight, theme } from "@styles/theme";

export const PostContent = () => {
   const { id } = useParams();
   const { data, loading, error } = useQuery<IEquilibriumPostById>(
      GET_EQUILIBRIUM_POST_BY_ID_QUERY,
      {
         variables: { id },
      }
   );

   console.log(data);

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
         ) : data?.equilibriumPost ? (
            <Content data={data} />
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
