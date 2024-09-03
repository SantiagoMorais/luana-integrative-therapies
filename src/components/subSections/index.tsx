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

export const SubSections = () => {
   const { setSectionSelected, sectionSelected } = useContext(
      SectionSelectedContext
   );

   const { postOrTopicSelected } = useContext(PostOrTopicContext);

   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];

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
