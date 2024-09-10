import { DocumentNode, useQuery } from "@apollo/client";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IEquilibriumPostsData } from "@utils/equilibriumBlogInterfaces";
import { useState } from "react";
import styled from "styled-components";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { ISegredosDaLuaPostsData } from "@utils/moonsSecretsBlogInterfaces";
import { useLocation } from "react-router-dom";
import { PostsList } from "./postsList";
import { ErrorPage } from "../errorPage";
import { NoPosts } from "../noPosts";
import { useThemeContext } from "hooks/useThemeContext";

interface ISectionPosts {
   query: DocumentNode;
}

const isEquilibriumPostsData = (
   data: IEquilibriumPostsData | ISegredosDaLuaPostsData | undefined
): data is IEquilibriumPostsData => {
   return (
      (data as IEquilibriumPostsData)?.equilibriumPostsConnection !== undefined
   );
};

const isSegredosDaLuaPostsData = (
   data: IEquilibriumPostsData | ISegredosDaLuaPostsData | undefined
): data is ISegredosDaLuaPostsData => {
   return (
      (data as ISegredosDaLuaPostsData)?.segredosDaLuaPostsConnection !==
      undefined
   );
};

export const SectionPosts: React.FC<ISectionPosts> = ({ query }) => {
   const { data, loading, fetchMore, error } = useQuery<
      IEquilibriumPostsData | ISegredosDaLuaPostsData
   >(query, {
      variables: {
         first: 10,
      },
   });
   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];
   const theme = useThemeContext();
   const [loadingMore, setLoadingMore] = useState<boolean>(false);

   let posts = null;
   let hasMore: boolean = false;
   let endCursor: string | null = "";

   if (locationName === "equilibrium" && isEquilibriumPostsData(data)) {
      posts = data.equilibriumPostsConnection.edges;
      hasMore = data.equilibriumPostsConnection.pageInfo.hasNextPage;
      endCursor = data.equilibriumPostsConnection.pageInfo.endCursor;
   } else if (
      locationName === "segredos-da-lua" &&
      isSegredosDaLuaPostsData(data)
   ) {
      posts = data.segredosDaLuaPostsConnection.edges;
      hasMore = data.segredosDaLuaPostsConnection.pageInfo.hasNextPage;
      endCursor = data.segredosDaLuaPostsConnection.pageInfo.endCursor;
   }

   const loadMorePosts = () => {
      if (loading || !data) return;

      setLoadingMore(true);

      fetchMore({
         variables: {
            after: endCursor,
            first: 5,
         },
         updateQuery: (prevResult, { fetchMoreResult }) => {
            setLoadingMore(false);
            if (!fetchMoreResult) return prevResult;

            if (
               isEquilibriumPostsData(prevResult) &&
               isEquilibriumPostsData(fetchMoreResult)
            ) {
               return {
                  equilibriumPostsConnection: {
                     ...fetchMoreResult.equilibriumPostsConnection,
                     edges: [
                        ...prevResult.equilibriumPostsConnection.edges,
                        ...fetchMoreResult.equilibriumPostsConnection.edges,
                     ],
                  },
               };
            } else if (
               isSegredosDaLuaPostsData(prevResult) &&
               isSegredosDaLuaPostsData(fetchMoreResult)
            ) {
               return {
                  segredosDaLuaPostsConnection: {
                     ...fetchMoreResult.segredosDaLuaPostsConnection,
                     edges: [
                        ...prevResult.segredosDaLuaPostsConnection.edges,
                        ...fetchMoreResult.segredosDaLuaPostsConnection.edges,
                     ],
                  },
               };
            } else {
               return prevResult;
            }
         },
      });
   };

   return (
      <Container $theme={theme}>
         <div className="content">
            {loading ? (
               <>
                  <div className="loading">
                     <FontAwesomeIcon
                        icon={faHourglassHalf}
                        spin
                        className="icon"
                     />
                  </div>
                  <p className="loadingMessage">Carregando...</p>
               </>
            ) : error ? (
               <ErrorPage />
            ) : data &&
              ((locationName === "equilibrium" &&
                 isEquilibriumPostsData(data) &&
                 data.equilibriumPostsConnection.edges.length > 0) ||
                 (locationName === "segredos-da-lua" &&
                    isSegredosDaLuaPostsData(data) &&
                    data.segredosDaLuaPostsConnection.edges.length > 0)) ? (
               <>
                  <h2 className="postsTitle">
                     Publicações sobre nossas terapias:
                  </h2>
                  <PostsList
                     infoEdge={posts}
                     hasMoreData={hasMore}
                     loadMore={loadMorePosts}
                     loadingPosts={loadingMore}
                  />
               </>
            ) : (
               <NoPosts />
            )}
         </div>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   display: flex;
   justify-content: center;
   width: 100%;

   .content {
      padding: 2rem 2rem 4rem;
      display: flex;
      flex-direction: column;
      max-width: 144rem;
      align-items: center;
      width: 100%;
      gap: 1rem;
      overflow: hidden;

      .loading {
         color: ${({ $theme }) => $theme.shadowColor};
         border: solid 0.2rem ${({ $theme }) => $theme.shadowColor};
         box-shadow: 0 0 1rem ${({ $theme }) => $theme.shadowColor};
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
         color: ${({ $theme }) => $theme.shadowColor};
         font-weight: ${fontWeight.medium};
      }

      .postsTitle {
         font-size: ${fontSize.largeSize};
         font-weight: ${fontWeight.medium};
         text-align: center;
      }
   }
`;
