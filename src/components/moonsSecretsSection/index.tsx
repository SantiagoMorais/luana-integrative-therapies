import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { useContext } from "react";
import { MoonsSecretsTopics } from "./moonsSecretsTopics";
import { Posts } from "./posts";
import { TopicsContext } from "@contexts/TopicsContext";
import { MoonsSecretsBanner } from "./moonsSecretsBanner";

export const MoonsSecretSection = () => {
   const { moonsSecretsTopicSelected } = useContext(TopicsContext);

   return (
      <Container data-testid="moonsSecretsSection">
         <Header />
         <MoonsSecretsBanner />
         {moonsSecretsTopicSelected === "posts" ? <Posts /> : <MoonsSecretsTopics />}
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
