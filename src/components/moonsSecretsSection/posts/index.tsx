import { useQuery } from "@apollo/client";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GET_MOONS_SECRETS_POSTS_QUERY } from "@utils/blogAPI";
import { useState } from "react";
import styled from "styled-components";
import { CommingSoon } from "@components/commingSoon";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { PostsList } from "./postsList";
import { IMoonsSecretsPostsData } from "@utils/moonsSecretsBlogInterfaces";
import { ErrorPage } from "../errorPage";

export const Posts = () => {
   const { data, loading, fetchMore, error } = useQuery<IMoonsSecretsPostsData>(
      GET_MOONS_SECRETS_POSTS_QUERY,
      {
         variables: {
            first: 10,
         },
      }
   );

   const [loadingMore, setLoadingMore] = useState<boolean>(false);

   const loadMoreTopics = () => {
      if (loading || !data?.segredosDaLuaPostsConnection.pageInfo.hasNextPage)
         return;

      setLoadingMore(true);

      fetchMore({
         variables: {
            after: data.segredosDaLuaPostsConnection.pageInfo.endCursor,
            first: 10,
         },
         updateQuery: (prevResult, { fetchMoreResult }) => {
            setLoadingMore(false);
            if (!fetchMoreResult) return prevResult;

            return {
               segredosDaLuaPostsConnection: {
                  ...fetchMoreResult.segredosDaLuaPostsConnection,
                  edges: [
                     ...prevResult.segredosDaLuaPostsConnection.edges,
                     ...fetchMoreResult.segredosDaLuaPostsConnection.edges,
                  ],
               },
            };
         },
      });
   };

   const hasMore =
      data?.segredosDaLuaPostsConnection?.pageInfo?.hasNextPage ?? false;

   return (
      <Container>
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
              data?.segredosDaLuaPostsConnection?.edges?.length > 0 ? (
               <>
                  <h2 className="postsTitle">
                     Publicações sobre nossas terapias:
                  </h2>
                  <PostsList
                     infoEdge={data.segredosDaLuaPostsConnection.edges}
                     hasMoreData={hasMore}
                     loadMore={loadMoreTopics}
                     loadingPosts={loadingMore}
                  />
               </>
            ) : (
               <CommingSoon />
            )}
         </div>
      </Container>
   );
};

const Container = styled.div`
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

      .postsTitle {
         font-size: ${fontSize.largeSize};
         font-weight: ${fontWeight.medium};
         text-align: center;
      }
   }
`;
