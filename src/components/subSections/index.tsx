import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { SectionSelectedContext } from "@contexts/sectionSelectedContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SectionBanner } from "./sectionBanner";
import { PostOrTopicContext } from "@contexts/postOrTopicContext";
import { SectionPosts } from "./sectionPosts";
import { SectionTopics } from "./sectionTopics";
import {
   GET_EQUILIBRIUM_POSTS_QUERY,
   GET_EQUILIBRIUM_TOPICS_QUERY,
   GET_SEGREDOS_DA_LUA_POSTS_QUERY,
   GET_SEGREDOS_DA_LUA_TOPICS_QUERY,
} from "@utils/blogAPI";
import { ITheme } from "@styles/theme";
import { useThemeContext } from "hooks/useThemeContext";
import { locationName } from "@utils/functions";

export const SubSections = () => {
   const location = useLocation();
   const theme = useThemeContext();

   const { setSectionSelected, sectionSelected } = useContext(
      SectionSelectedContext
   );

   const { postOrTopicSelected } = useContext(PostOrTopicContext);

   useEffect(() => {
      switch (locationName(location)) {
         case "equilibrium":
            setSectionSelected("equilibrium");
            break;
         case "segredos-da-lua":
            setSectionSelected("segredos-da-lua");
            break;
         default:
            setSectionSelected("");
      }
   }, [setSectionSelected, location]);

   return (
      <Container $theme={theme}>
         <Header />
         <SectionBanner sectionSelected={sectionSelected} />
         {postOrTopicSelected === "posts" ? (
            <SectionPosts
               query={
                  sectionSelected === "equilibrium"
                     ? GET_EQUILIBRIUM_POSTS_QUERY
                     : GET_SEGREDOS_DA_LUA_POSTS_QUERY
               }
            />
         ) : (
            <SectionTopics
               query={
                  sectionSelected === "equilibrium"
                     ? GET_EQUILIBRIUM_TOPICS_QUERY
                     : GET_SEGREDOS_DA_LUA_TOPICS_QUERY
               }
            />
         )}
         <Footer />
      </Container>
   );
};

const Container = styled.section<{ $theme: ITheme }>`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   background-color: ${({ $theme }) => $theme.backgroundColor};

   .sectionsButtons {
      display: flex;
      gap: 1rem;
      width: 100%;
      justify-content: center;
   }
`;
