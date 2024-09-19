import { Footer } from "@components/footer";
import { Header } from "@components/header";
import styled from "styled-components";
import { AboutMe } from "./aboutMe";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const AboutSection = () => {
   const { pathname } = useLocation();

   useEffect(() => {
     window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <Container>
         <Header />
         <AboutMe />
         <Footer />
      </Container>
   );
};

const Container = styled.section`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   overflow: hidden;
`;
