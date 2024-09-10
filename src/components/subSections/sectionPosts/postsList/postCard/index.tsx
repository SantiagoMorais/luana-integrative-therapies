import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   fontSize,
   fontWeight,
   IDefaultTheme,
   ISectionsTheme,
} from "@styles/theme"; // Certifique-se de usar o arquivo de estilo correto
import { IEquilibriumPostNode } from "@utils/equilibriumBlogInterfaces";
import { handlePageTheme, locationName } from "@utils/functions";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IPostBannerProps {
   infoNode: IEquilibriumPostNode;
}

export const PostCard: React.FC<IPostBannerProps> = ({ infoNode }) => {
   const location = useLocation();

   return (
      <Container $theme={handlePageTheme(locationName(location))}>
         <Link
            to={`/${locationName(location)}/${infoNode.id}`}
            className="banner"
         >
            {infoNode.imagem?.url ? (
               <img
                  src={infoNode.imagem.url}
                  alt={`Imagem do post "${infoNode.titulo}"`}
                  className="postImage"
               />
            ) : (
               <p className="imageNotFound">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                  Imagem não encontrada
               </p>
            )}
            <div className="postInfo">
               <h2 className="postTitle">{infoNode.titulo}</h2>
               {infoNode.subtitulo && (
                  <h3 className="postSubtitle">{infoNode.subtitulo}</h3>
               )}
               <p className="link">Ler publicação</p>
            </div>
            <p className="authorsName">
               {infoNode.autor?.nome
                  ? infoNode.autor.nome
                  : "Autor não informado"}
            </p>
         </Link>
      </Container>
   );
};

const Container = styled.li<{ $theme: ISectionsTheme | IDefaultTheme }>`
   display: flex;

   .banner {
      flex: 1;
      width: 100%;
      height: auto;
      border-radius: 1rem;
      border: solid 0.2rem ${({ $theme }) => $theme.shadowColor};
      box-shadow: 0.5rem 0.5rem 1rem ${({ $theme }) => $theme.secondaryColor};
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: 0.5s;
      position: relative;

      .postImage {
         width: 100%;
         height: 30rem;
         object-fit: cover;
         object-position: center;
         border-bottom: solid 0.1rem ${({ $theme }) => $theme.secondaryColor};
         z-index: 1;
      }

      .imageNotFound {
         width: 100%;
         height: 30rem;
         display: flex;
         flex-direction: column;
         gap: 1rem;
         color: ${({ $theme }) => $theme.shadowColor};
         font-size: ${fontSize.smallSize};
         justify-content: center;
         align-items: center;
         border-bottom: solid 0.1rem ${({ $theme }) => $theme.secondaryColor};
         z-index: 1;
      }

      .postInfo {
         padding: 1rem;
         display: flex;
         flex-direction: column;
         width: 100%;
         gap: 1rem;
         z-index: 1;

         .postTitle {
            font-size: ${fontSize.mediumSize};
            color: ${({ $theme }) => $theme.textColor};
            font-weight: ${fontWeight.bold};
         }

         .postSubtitle {
            font-size: ${fontSize.basicSize};
            margin-bottom: 1rem;
            color: ${({ $theme }) => $theme.shadowColor};
            font-weight: ${fontWeight.bold};
            opacity: 0.8;

            &::first-letter {
               text-transform: capitalize;
            }
         }

         .link {
            font-size: ${fontSize.smallSize};
            color: ${({ $theme }) => $theme.tertiaryColor};
            font-weight: ${fontWeight.bold};
            text-transform: uppercase;
            letter-spacing: 0.1rem;
         }
      }

      .authorsName {
         padding: 1rem 0;
         margin: auto 1rem 0;
         border-top: solid 0.1rem ${({ $theme }) => $theme.tertiaryColor};
         font-size: ${fontSize.smallSize};
         color: ${({ $theme }) => $theme.textColor};
         text-align: center;
         font-weight: ${fontWeight.bold};
         opacity: 0.8;
         z-index: 1;
      }

      &:hover {
         opacity: 0.8;
      }

      &::after {
         content: "";
         position: absolute;
         width: 100%;
         height: 100%;
         left: 0;
         bottom: 0;
         transition: 0.5s;
      }

      &:hover::after {
         background: ${({ $theme }) => $theme.primaryColor};
         opacity: 0.8;
         z-index: 0;
      }
   }
`;
