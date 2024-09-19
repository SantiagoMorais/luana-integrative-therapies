import styled from "styled-components";

import { Benefits } from "./benefits";
import { TherapeuticCare } from "./therapeuticCare";
import { Depositions } from "./depositions";
import { FAQs } from "./faqs";
import { Hero } from "./hero";
import { FollowMeSection } from "./followMeSection";

import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const HomeSection = () => {
   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);
   
   return (
      <Container>
         <div className="frontPage">
            <Header />
            <Hero />
         </div>
         <Benefits />
         <TherapeuticCare />
         <Depositions />
         <FollowMeSection />
         <FAQs />
         <Footer />
      </Container>
   );
};

const Container = styled.section`
   width: 100%;
   min-height: 100dvh;

   .frontPage {
      display: flex;
      flex-direction: column;
      flex: 1;
      height: 100dvh;
      max-height: 90dvh;
   }

   @media (max-width: 1920px) {
      .frontPage {
         max-height: 90rem;
      }
   }
`;
