import styled from "styled-components";
import parse from "html-react-parser";
import { useThemeContext } from "hooks/useThemeContext";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { IEquilibriumPostNode } from "@utils/equilibriumBlogInterfaces";
import { ISegredosDaLuaPostNode } from "@utils/moonsSecretsBlogInterfaces";
import { ImageNotFound } from "./imageNotFound";

interface IContent {
   data: IEquilibriumPostNode | ISegredosDaLuaPostNode;
}

export const PostDescription: React.FC<IContent> = ({ data }) => {
   const theme = useThemeContext();
   return (
      <Container $theme={theme}>
         {data?.imagem?.url ? (
            <img
               className="topicImage"
               src={data?.imagem?.url}
               alt={`Imagem do tratamento ${data?.titulo}`}
            />
         ) : (
            <ImageNotFound />
         )}
         {data && parse(data?.texto.html)}
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
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

   @media (max-width: 768px) {
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
   }
`;
