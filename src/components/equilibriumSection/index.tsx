import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { EquilibriumBanner } from "./equilibriumBanner";
import { useContext } from "react";
import { EquilibriumTopicsContext } from "@contexts/equilibriumTopicContext";
import { EquilibriumTopics } from "./equilibriumTopics";
import { Posts } from "./posts";

export const EquilibriumSection = () => {
   const { topicSelected } = useContext(EquilibriumTopicsContext);

   return (
      <Container data-testid="equilibriumSection">
         <Header />
         <EquilibriumBanner />
         {topicSelected === "posts" ? <Posts /> : <EquilibriumTopics />}
         <Footer />
      </Container>
   );
};

const Container = styled.section`
   min-height: 100vh;
   display: flex;
   flex-direction: column;

   .sectionsButtons {
      display: flex;
      gap: 1rem;
      width: 100%;
      justify-content: center;
   }
`;
