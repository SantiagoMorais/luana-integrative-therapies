import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { EquilibriumBanner } from "./equilibriumBanner";
import { useContext } from "react";
import { EquilibriumTopics } from "./equilibriumTopics";
import { Posts } from "./posts";
import { TopicsContext } from "@contexts/TopicsContext";

export const EquilibriumSection = () => {
   const { equilibriumTopicSelected } = useContext(TopicsContext);

   return (
      <Container data-testid="equilibriumSection">
         <Header />
         <EquilibriumBanner />
         {equilibriumTopicSelected === "posts" ? <Posts /> : <EquilibriumTopics />}
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
