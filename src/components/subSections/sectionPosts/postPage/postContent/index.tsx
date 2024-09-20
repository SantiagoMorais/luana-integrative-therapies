import { IEquilibriumPostNode } from "@utils/equilibriumBlogInterfaces";
import { ISegredosDaLuaPostNode } from "@utils/moonsSecretsBlogInterfaces";
import styled from "styled-components";
import parse from "html-react-parser";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMagnifyingGlass,
   faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AuthorInfo } from "../authorInfo";
import { useThemeContext } from "hooks/useThemeContext";
import { useContext, useEffect } from "react";
import { PostOrTopicContext } from "@contexts/postOrTopicContext";

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
            <div className="descriptionContent">
               {data?.imagem?.url ? (
                  <img
                     className="topicImage"
                     src={data?.imagem?.url}
                     alt={`Imagem do tratamento ${data?.titulo}`}
                  />
               ) : (
                  <div className="imageNotFound">
                     <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="icon"
                     />
                     <h3 className="imageNotFoundTitle">
                        Imagem não encontrada
                     </h3>
                  </div>
               )}
               {data && parse(data?.texto.html)}
            </div>

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

      .descriptionContent {
         .topicImage,
         img {
            float: left;
            min-height: 30rem;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0.5rem;
            width: 50%;
            max-width: 50rem;
            margin: 0rem 2rem 1rem 0rem;
         }

         .topicImage {
            border: 0.2rem solid ${({ $theme }) => $theme.primaryColor};
            height: 50dvh;
            max-height: 50rem;
         }

         img {
            border: 0.2rem solid ${({ $theme }) => $theme.tertiaryColor};
            height: 40dvh;
            max-height: 40rem;
         }

         .imageNotFound {
            float: right;
            height: 50dvh;
            min-height: 30rem;
            max-height: 50rem;
            border-radius: 0.5rem;
            border: 0.2rem solid ${({ $theme }) => $theme.primaryColor};
            width: 50%;
            max-width: 50rem;
            margin: 0rem 0rem 1rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${({ $theme }) => $theme.textColor};

            .icon {
               font-size: ${fontSize.basicSize};
            }

            .imageNotFoundTitle {
               font-size: ${fontSize.basicSize};
               font-weight: ${fontWeight.medium};
            }
         }

         p {
            font-size: ${fontSize.basicSize};
            font-weight: ${fontWeight.medium};
            text-indent: 5rem;
            text-align: justify;
            margin-bottom: 1rem;
            color: ${({ $theme }) => $theme.textColor};

            a {
               color: ${({ $theme }) => $theme.tertiaryColor};
               font-weight: ${fontWeight.medium};
               transition: 0.3s;

               &:hover {
                  opacity: 0.7;
               }
            }

            &:last-child {
               margin-bottom: 0;
            }
         }

         h2,
         h3,
         h4,
         h5,
         h6 {
            position: relative;
            margin: 2rem 0;
            color: ${({ $theme }) => $theme.textColor};
            overflow-wrap: normal;
            display: inline-block;

            &::after {
               content: "";
               position: absolute;
               bottom: -0.3rem;
               left: 0;
               width: 120%;
               height: 0.2rem;
               background: linear-gradient(
                  to right,
                  ${({ $theme }) => $theme.tertiaryColor} 60%,
                  transparent 100%
               );
            }
         }

         h2,
         h3 {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.medium};

            strong {
               font-weight: ${fontWeight.bold};
            }
         }

         h4,
         h5,
         h6 {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.thin};

            strong {
               font-weight: ${fontWeight.medium};
            }
         }

         blockquote {
            font-size: ${fontSize.smallSize};
            border-left: 0.2rem solid rgba(0, 0, 0, 0.342);
            display: inline-block;
            color: rgba(0, 0, 0, 0.7);
            font-weight: ${fontWeight.medium};
            margin: 1rem 0;
            background-color: rgba(85, 85, 85, 0.2);
            border-radius: 0 1rem 1rem 0;
            padding: 0.5rem 1rem;
         }

         ul,
         ol {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-left: 3rem;
            margin-bottom: 2rem;

            li {
               font-size: ${fontSize.basicSize};
               font-weight: ${fontWeight.medium};
               list-style-position: outside;

               div {
                  text-indent: 0rem;
                  color: ${({ $theme }) => $theme.textColor};

                  p {
                     text-indent: 0rem;
                  }
               }
            }
         }

         ul {
            li {
               list-style-type: circle;
            }
         }

         ol {
            li {
               list-style-type: decimal;
            }
         }

         table {
            width: 100%;

            thead {
               tr {
                  th {
                     background-color: ${({ $theme }) => $theme.primaryColor};
                     border: 0.1rem solid rgba(0, 0, 0, 0.6);

                     p {
                        text-align: center;
                        text-indent: 0;
                     }
                  }
               }
            }

            tbody {
               tr {
                  td {
                     border: 0.1rem solid rgba(0, 0, 0, 0.6);
                     p {
                        text-align: center;
                        text-indent: 0;
                     }
                  }
               }
            }
         }

         video {
            display: block;
            border-radius: 1rem;
            padding: 2rem 0;
            width: 100%;
            height: calc(60dvw * 9 / 16);
            max-height: calc(80rem * 9 / 16);
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
         .descriptionContent {
            .topicImage,
            img {
               float: none;
               height: auto;
               min-height: auto;
               max-height: 50rem;
               width: 100%;
               max-width: 100%;
               margin: 0rem 0rem 1rem;
            }

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
   }
`;
