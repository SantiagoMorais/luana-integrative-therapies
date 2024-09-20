import { IEquilibriumPostNode } from "@utils/equilibriumBlogInterfaces";
import { ISegredosDaLuaPostNode } from "@utils/moonsSecretsBlogInterfaces";
import styled from "styled-components";
import parse from "html-react-parser";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { AuthorInfo } from "../authorInfo";
import { useThemeContext } from "hooks/useThemeContext";
import { useContext, useEffect } from "react";
import { PostOrTopicContext } from "@contexts/postOrTopicContext";
import { PostDescription } from "./postDescription";

interface IContent {
   data: IEquilibriumPostNode | ISegredosDaLuaPostNode;
}

export const PostContent: React.FC<IContent> = ({ data }) => {
   const theme = useThemeContext();
   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];
   const { setPostOrTopicSelected } = useContext(PostOrTopicContext);

   const dateConvertedToPtStandard = data?.data
      .toString()
      .split("-")
      .reverse()
      .join("/");

   useEffect(() => {
      setPostOrTopicSelected("posts");
   }, [setPostOrTopicSelected]);

   return (
      <Container $theme={theme}>
         <div className="postContent">
            <AuthorInfo autor={data?.autor} />
            <h2 className="title">{data?.titulo}</h2>
            <PostDescription data={data} />

            {data?.video && <div className="video">{parse(data?.video)}</div>}
            <div className="date">
               <p className="dateData">
                  Publicado/atualizado em: {dateConvertedToPtStandard}
               </p>
               <Link to={`/${locationName}`} className="returnButton">
                  <FontAwesomeIcon icon={faRotateLeft} className="icon" />
                  <p className="message">Retornar para às publicações</p>
               </Link>
            </div>
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

      .video {
         width: 100%;
         display: flex;
         justify-content: center;

         iframe {
            border-radius: 1rem;
            width: 60dvw;
            max-width: 80rem;
            height: calc(60dvw * 9 / 16);
            max-height: calc(80rem * 9 / 16);
         }
      }

      .date {
         padding: 0rem 2rem;
         display: flex;
         justify-content: center;
         flex-direction: column;
         align-items: center;
         flex-wrap: wrap;
         gap: 2rem;

         .dateData {
            font-size: ${fontSize.mediumSize};
            color: ${({ $theme }) => $theme.textColor};
            font-weight: ${fontWeight.medium};
            position: relative;

            &::after {
               content: "";
               position: absolute;
               bottom: -1rem;
               left: 0;
               width: 100%;
               height: 0.2rem;
               background: linear-gradient(
                  to right,
                  transparent,
                  ${({ $theme }) => $theme.secondaryColor},
                  transparent
               );
            }
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

   @media (max-width: 768px) {
      .postContent {
         .video {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;

            iframe {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               max-width: none;
            }
         }
      }
   }
`;
