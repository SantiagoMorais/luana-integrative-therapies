import { IMoonsSecretsTopicsData } from "@utils/moonsSecretsBlogInterfaces";
import styled from "styled-components";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { MoonsSecretsTopicsList } from "./moonsSecretsTopicsList";
import { MoonsSecretsTopicContent } from "./moonsSecretsTopicContent";
import { useQuery } from "@apollo/client";
import { GET_MOONS_SECRETS_TOPICS_QUERY } from "@utils/blogAPI";
import { ErrorPage } from "../errorPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { MoonsSecretsTopicListEmpty } from "./moonsSecretsTopicContent/moonsSecretsTopicListEmpty";

export const MoonsSecretsTopics = () => {
   const { data, loading, fetchMore, error } =
      useQuery<IMoonsSecretsTopicsData>(GET_MOONS_SECRETS_TOPICS_QUERY, {
         variables: {
            first: 5,
         },
      });
   const [loadingMore, setLoadingMore] = useState<boolean>(false);

   const loadMoreTopics = () => {
      if (loading || !data?.segredosDaLuaTopicosConnection.pageInfo.hasNextPage)
         return;

      setLoadingMore(true);

      fetchMore({
         variables: {
            after: data.segredosDaLuaTopicosConnection.pageInfo.endCursor,
            first: 5,
         },
         updateQuery: (prevResult, { fetchMoreResult }) => {
            setLoadingMore(false);
            if (!fetchMoreResult) return prevResult;

            return {
               segredosDaLuaTopicosConnection: {
                  ...fetchMoreResult.segredosDaLuaTopicosConnection,
                  edges: [
                     ...prevResult.segredosDaLuaTopicosConnection.edges,
                     ...fetchMoreResult.segredosDaLuaTopicosConnection.edges,
                  ],
               },
            };
         },
      });
   };

   const hasMore =
      data?.segredosDaLuaTopicosConnection?.pageInfo?.hasNextPage ?? false;

   const hadleSlidesPerView = (): number => {
      if (!data || !data.segredosDaLuaTopicosConnection) {
         return 1;
      }

      const topicosLength: number =
         data.segredosDaLuaTopicosConnection.edges.length;
      return topicosLength < 5 ? topicosLength : 4;
   };

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
            ) : data && data?.segredosDaLuaTopicosConnection.edges.length > 0 ? (
               <>
                  <h2 className="therapiesTitle">
                     Veja alguns dos nossos serviços:
                  </h2>
                  <MoonsSecretsTopicsList
                     info={data.segredosDaLuaTopicosConnection.edges}
                     slidesPerView={hadleSlidesPerView()}
                     imagesHeightInRem={40}
                     loadMore={loadMoreTopics}
                     hasMore={hasMore}
                     loading={loadingMore}
                  />
                  <MoonsSecretsTopicContent
                     data={data.segredosDaLuaTopicosConnection.edges}
                  />
               </>
            ) : (
               <MoonsSecretsTopicListEmpty />
            )}
         </div>
      </Container>
   );
};

const Container = styled.section`
   display: flex;
   justify-content: center;
   width: 100%;
   margin-bottom: 5rem;

   .content {
      padding: 2rem;
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

      .therapiesTitle {
         font-size: ${fontSize.largeSize};
         font-weight: ${fontWeight.medium};
         text-align: center;
      }
   }
`;
