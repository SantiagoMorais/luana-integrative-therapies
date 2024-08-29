import { IEquilibriumPostById } from "@utils/equilibriumBlogInterfaces";
import styled from "styled-components";
import parse from "html-react-parser";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faMagnifyingGlass,
   faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { AuthorInfo } from "../authorInfo";

interface IContent {
   data: IEquilibriumPostById;
}

export const Content: React.FC<IContent> = ({ data }) => {
   const dateConvertedToPtStandard = data.equilibriumPost?.data
      .toString()
      .split("-")
      .reverse()
      .join("/");

   return (
      <Container>
         <div className="postContent">
            <AuthorInfo autor={data.equilibriumPost?.autor} />
            <h2 className="title">{data?.equilibriumPost?.titulo}</h2>
            <div className="descriptionContent">
               {data?.equilibriumPost?.imagem?.url ? (
                  <img
                     className="topicImage"
                     src={data?.equilibriumPost?.imagem?.url}
                     alt={`Imagem do tratamento ${data?.equilibriumPost?.titulo}`}
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
               {data.equilibriumPost && parse(data.equilibriumPost?.texto.html)}
            </div>

            {data?.equilibriumPost?.video && (
               <div className="video">
                  {parse(data?.equilibriumPost?.video)}
               </div>
            )}
            <div className="date">
               <p className="dateData">
                  Publicado/atualizado em: {dateConvertedToPtStandard}
               </p>
               <Link to={"/equilibrium"} className="returnButton">
                  <FontAwesomeIcon icon={faRotateLeft} className="icon" />
                  <p className="message">Retornar para às publicações</p>
               </Link>
            </div>
         </div>
      </Container>
   );
};

const Container = styled.div`
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
               ${theme.tertiaryColor} 50%,
               transparent 100%
            );
         }
      }

      .descriptionContent {
         .topicImage {
            float: right;
            height: 50dvh;
            min-height: 30rem;
            max-height: 50rem;
            object-fit: cover;
            border-radius: 0.5rem;
            border: 0.2rem solid ${theme.primaryColor};
            width: 50%;
            max-width: 50rem;
            margin: 0rem 0rem 1rem 2rem;
         }

         .imageNotFound {
            float: right;
            height: 50dvh;
            min-height: 30rem;
            max-height: 50rem;
            border-radius: 0.5rem;
            border: 0.2rem solid ${theme.primaryColor};
            width: 50%;
            max-width: 50rem;
            margin: 0rem 0rem 1rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${theme.textColor};

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
            color: ${theme.textColor};

            &:last-child {
               margin-bottom: 0;
            }
         }

         h2,
         h3,
         h4 {
            position: relative;
            margin: 2rem 0;
            color: ${theme.textColor};
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
                  ${theme.tertiaryColor} 60%,
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

         h4 {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.thin};

            strong {
               font-weight: ${fontWeight.medium};
            }
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
                  color: ${theme.textColor};

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
            color: ${theme.textColor};
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
                  ${theme.secondaryColor},
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
         color: ${theme.secondaryColor};
         transition: 0.5s;

         .icon {
            transition: transform 0.5s;
         }

         &:hover {
            color: ${theme.shadowColor};
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
            .topicImage {
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
