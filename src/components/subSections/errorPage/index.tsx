import styled from "styled-components";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { fontSize, IDefaultTheme, ISectionsTheme } from "@styles/theme";
import { handlePageTheme, locationName } from "@utils/functions";

export const ErrorPage = () => {
   const location = useLocation();

   return (
      <Container $theme={handlePageTheme(locationName(location))}>
         <div className="content">
            <FontAwesomeIcon className="icon" icon={faFaceFrown} />
            <h3 className="warningTitle">ERRO 404 - Dados não encontradas</h3>
            <p className="warningText">
               Por algum motivo não encontrados o que você procura. Por favor,
               tente mais tarde ou entre em contato conosco.
            </p>
         </div>
      </Container>
   );
};

const Container = styled.div<{ $theme: ISectionsTheme | IDefaultTheme }>`
   width: 100%;
   padding: 2rem 2rem 4rem;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   .content {
      max-width: 108rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      .icon {
         width: 30%;
         height: 30%;
         max-width: 30rem;
         color: ${({$theme}) => $theme.tertiaryColor};
         opacity: 50%;
      }

      .warningTitle {
         color: ${({$theme}) => $theme.tertiaryColor};
         font-size: ${fontSize.extraLargeSize};
         text-align: center;
      }

      .warningText {
         color: ${({$theme}) => $theme.textColor};
         font-size: ${fontSize.mediumSize};
         text-align: center;
      }
   }

   @media (max-width: 420px) {
      .content {
         .warningTitle {
            font-size: ${fontSize.mediumSize};
         }

         .warningText {
            font-size: ${fontSize.basicSize};
         }

         .icon {
            width: 50%;
            height: 50%;
         }
      }
   }
`;
