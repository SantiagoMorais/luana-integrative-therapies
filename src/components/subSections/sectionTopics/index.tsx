import { DocumentNode, useQuery } from "@apollo/client";
import { fontSize, fontWeight, theme } from "@styles/theme";
import styled from "styled-components";
import { TopicsList } from "./topicsList";
import { IEquilibriumTopicsData } from "@utils/equilibriumBlogInterfaces";
import { ISegredosDaLuaTopicsData } from "@utils/moonsSecretsBlogInterfaces";
import { useContext } from "react";
import { SectionSelectedContext } from "@contexts/sectionSelectedContext";

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

export const SectionTopics: React.FC<ISectionTopics> = ({ query }) => {
   const { sectionSelected } = useContext(SectionSelectedContext);

   const { data } = useQuery<IEquilibriumTopicsData | ISegredosDaLuaTopicsData>(
      query,
      {
         variables: {
            first: 5,
         },
      }
   );

   let topics = null;

   if (sectionSelected === "equilibrium" && isEquilibriumTopicsData(data)) {
      topics = data.equilibriumTopicosConnection.edges;
   } else if (
      sectionSelected === "segredos-da-lua" &&
      isSegredosDaLuaTopicsData(data)
   ) {
      topics = data.segredosDaLuaTopicosConnection.edges;
   }

   return (
      <Container>
         <div className="content">
            <h2 className="sectionTitle">Veja alguns dos nossos serviços:</h2>
            <TopicsList
               info={topics}
               slidesPerView={4}
               imagesHeightInRem={30}
            />
         </div>
      </Container>
   );
};

const Container = styled.div`
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

      .sectionTitle {
         font-size: ${fontSize.largeSize};
         font-weight: ${fontWeight.medium};
         text-align: center;
      }
   }
`;
