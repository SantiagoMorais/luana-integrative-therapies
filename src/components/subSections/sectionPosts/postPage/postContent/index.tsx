import { IEquilibriumPostNode } from "@utils/equilibriumBlogInterfaces";
import { ISegredosDaLuaPostNode } from "@utils/moonsSecretsBlogInterfaces";
import styled from "styled-components";
import { fontSize, ITheme } from "@styles/theme";
import { AuthorInfo } from "../authorInfo";
import { useThemeContext } from "hooks/useThemeContext";
import { useContext, useEffect } from "react";
import { PostOrTopicContext } from "@contexts/postOrTopicContext";
import { PostDescription } from "./postDescription";
import { PostDate } from "./postDate";
import { PostVideo } from "./postVideo";

interface IContent {
   data: IEquilibriumPostNode | ISegredosDaLuaPostNode;
}

export const PostContent: React.FC<IContent> = ({ data }) => {
   const theme = useThemeContext();
   const { setPostOrTopicSelected } = useContext(PostOrTopicContext);

   useEffect(() => {
      setPostOrTopicSelected("posts");
   }, [setPostOrTopicSelected]);

   return (
      <Container $theme={theme}>
         <div className="postContent">
            <AuthorInfo autor={data?.autor} />
            <h2 className="title">{data?.titulo}</h2>
            <PostDescription data={data} />

            {data?.video && <PostVideo video={data.video}/>}
            <PostDate date={data?.data}/>
         </div>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   width: 100%;
   display: flex;
   justify-content: center;

   .postContent {
      width: 100%;
      max-width: 144rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      gap: 3rem;
      align-items: center;
      padding: 4rem 2rem;

      .title {
         text-align: center;
         margin: 2rem;
         position: relative;
         font-size: ${fontSize.largeSize};

         &::first-letter {
            text-transform: capitalize;
         }

         &::after {
            content: "";
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 100%;
            height: 0.2rem;
            background: linear-gradient(
               to right,
               transparent 0%,
               ${({ $theme }) => $theme.tertiaryColor} 50%,
               transparent 100%
            );
         }
      }

      .returnButton {
         display: flex;
         gap: 1rem;
         padding: 1rem 0;
         font-size: ${fontSize.basicSize};
         align-items: center;
         color: ${({ $theme }) => $theme.secondaryColor};
         transition: 0.5s;

         .icon {
            transition: transform 0.5s;
         }

         &:hover {
            color: ${({ $theme }) => $theme.shadowColor};
            scale: 1.1;

            .icon {
               transform: rotate(-360deg);
            }
         }
      }
   }
`;
