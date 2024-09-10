import { DocumentNode, useQuery } from "@apollo/client";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import styled from "styled-components";
import { TopicsList } from "./topicsList";
import { IEquilibriumTopicsData } from "@utils/equilibriumBlogInterfaces";
import { ISegredosDaLuaTopicsData } from "@utils/moonsSecretsBlogInterfaces";
import { useContext, useState } from "react";
import { SectionSelectedContext } from "@contexts/sectionSelectedContext";
import { TopicContent } from "./topicContent";
import { ErrorPage } from "../errorPage";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "hooks/useThemeContext";

interface ISectionTopics {
   query: DocumentNode;
}

const isEquilibriumTopicsData = (
   data: IEquilibriumTopicsData | ISegredosDaLuaTopicsData | undefined
): data is IEquilibriumTopicsData => {
   return (
      (data as IEquilibriumTopicsData)?.equilibriumTopicosConnection !==
      undefined
   );
};

const isSegredosDaLuaTopicsData = (
   data: IEquilibriumTopicsData | ISegredosDaLuaTopicsData | undefined
): data is ISegredosDaLuaTopicsData => {
   return (
      (data as ISegredosDaLuaTopicsData)?.segredosDaLuaTopicosConnection !==
      undefined
   );
};

const handleSlidesPerView = (
   data: IEquilibriumTopicsData | ISegredosDaLuaTopicsData | undefined,
   sectionSelected: string
): number => {
   if (!data) {
      return 1;
   }

   let topicsLength = 0;

   if (sectionSelected === "equilibrium" && isEquilibriumTopicsData(data)) {
      topicsLength = data.equilibriumTopicosConnection.edges.length;
   } else if (
      sectionSelected === "segredos-da-lua" &&
      isSegredosDaLuaTopicsData(data)
   ) {
      topicsLength = data.segredosDaLuaTopicosConnection.edges.length;
   }

   return topicsLength < 5 ? topicsLength : 4;
};

export const SectionTopics: React.FC<ISectionTopics> = ({ query }) => {
   const { sectionSelected } = useContext(SectionSelectedContext);
   const theme = useThemeContext();

   const { data, fetchMore, loading, error } = useQuery<
      IEquilibriumTopicsData | ISegredosDaLuaTopicsData
   >(query, {
      variables: {
         first: 5,
      },
   });

   const [loadingMore, setLoadingMore] = useState<boolean>(false);

   let topics = null;
   let hasMore: boolean = false;
   let endCursor: string | null = "";

   if (sectionSelected === "equilibrium" && isEquilibriumTopicsData(data)) {
      topics = data.equilibriumTopicosConnection.edges;
      hasMore = data.equilibriumTopicosConnection.pageInfo.hasNextPage;
      endCursor = data.equilibriumTopicosConnection.pageInfo.endCursor;
   } else if (
      sectionSelected === "segredos-da-lua" &&
      isSegredosDaLuaTopicsData(data)
   ) {
      topics = data.segredosDaLuaTopicosConnection.edges;
      hasMore = data.segredosDaLuaTopicosConnection.pageInfo.hasNextPage;
      endCursor = data.segredosDaLuaTopicosConnection.pageInfo.endCursor;
   }

   const loadMoreTopics = () => {
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
               isEquilibriumTopicsData(prevResult) &&
               isEquilibriumTopicsData(fetchMoreResult)
            ) {
               return {
                  equilibriumTopicosConnection: {
                     ...fetchMoreResult.equilibriumTopicosConnection,
                     edges: [
                        ...prevResult.equilibriumTopicosConnection.edges,
                        ...fetchMoreResult.equilibriumTopicosConnection.edges,
                     ],
                  },
               };
            } else if (
               isSegredosDaLuaTopicsData(prevResult) &&
               isSegredosDaLuaTopicsData(fetchMoreResult)
            ) {
               return {
                  segredosDaLuaTopicosConnection: {
                     ...fetchMoreResult.segredosDaLuaTopicosConnection,
                     edges: [
                        ...prevResult.segredosDaLuaTopicosConnection.edges,
                        ...fetchMoreResult.segredosDaLuaTopicosConnection.edges,
                     ],
                  },
               };
            } else {
               return prevResult;
            }
         },
      });
   };

   const slidesPerView = handleSlidesPerView(data, sectionSelected);

   return (
      <Container $theme={theme}>
         <div className="content">
            <h2 className="sectionTitle">Veja alguns dos nossos serviços:</h2>
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
            ) : (
               <>
                  <TopicsList
                     info={topics}
                     slidesPerView={slidesPerView}
                     imagesHeightInRem={40}
                     loadMore={loadMoreTopics}
                     hasMore={hasMore}
                     loading={loadingMore}
                  />
                  <TopicContent data={topics} />
               </>
            )}
         </div>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
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
         color: ${({ $theme }) => $theme.shadowColor};
         border: solid 0.2rem ${({ $theme }) => $theme.shadowColor};
         box-shadow: 0 0 1rem ${({ $theme }) => $theme.shadowColor};
         border-radius: 50%;
         width: 8rem;
         height: 8rem;
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

      .sectionTitle {
         font-size: ${fontSize.largeSize};
         font-weight: ${fontWeight.medium};
         text-align: center;
      }
   }
`;
