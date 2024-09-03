import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { SectionSelectedContext } from "@contexts/sectionSelectedContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SectionBanner } from "./sectionBanner";

export const SubSections = () => {
   const { setSectionSelected, sectionSelected } = useContext(
      SectionSelectedContext
   );

   const location = useLocation();
   const locationPath = location.pathname.slice(1);
   const locationName = locationPath.split("/")[0];

   useEffect(() => {
      switch (locationName) {
        case "equilibrium":
            setSectionSelected("equilibrium");
            break;
        case "segredos-da-lua":
            setSectionSelected("segredos-da-lua");
            break;
        default:
            setSectionSelected("");
      }
   }, [locationName, setSectionSelected]);   

   return (
      <Container>
         <Header />
         <SectionBanner sectionSelected={sectionSelected} />

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
