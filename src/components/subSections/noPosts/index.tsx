import styled from "styled-components";
import commingSoonImage from "@assets/imgs/pageComingSoon.jpg";
import { fontSize, fontWeight, IDefaultTheme, ISectionsTheme } from "@styles/theme";
import { handlePageTheme, locationName } from "@utils/functions";
import { useLocation } from "react-router-dom";

export const NoPosts = () => {
   const location = useLocation();
   
   return (
      <Container $theme={handlePageTheme(locationName(location))}>
         <h2 className="title">Nenhuma publicação no momento</h2>
         <p className="description">
            Fique tranquilo, em breve traremos uma série de conteúdos valiosos
            para te ajudar a conquistar uma vida saudável. Nosso foco é a
            prevenção, pensando em você evitando doenças antes que seja tarde
            demais. Fique de olho, pois muitas novidades estão a caminho!
         </p>
         <img
            className="image"
            src={commingSoonImage}
            alt="Conteúdos em breve"
         />
      </Container>
   );
};

const Container = styled.section<{ $theme: ISectionsTheme | IDefaultTheme }>`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   padding: 0 2rem 2rem;

   .title {
      font-size: ${fontSize.extraLargeSize};
      font-weight: ${fontWeight.medium};
      color: ${({$theme}) => $theme.textColor};
      text-align: center;
      position: relative;

      &::after {
         content: "";
         position: absolute;
         left: 0;
         bottom: -0.5rem;
         height: 0.2rem;
         width: 100%;
         background: linear-gradient(
            to right,
            transparent 0%,
            ${({$theme}) => $theme.tertiaryColor} 30%,
            ${({$theme}) => $theme.tertiaryColor} 70%,
            transparent 100%
         );
      }
   }

   .description {
      font-size: ${fontSize.mediumSize};
      font-weight: ${fontWeight.thin};
      color: ${({$theme}) => $theme.textColor};
      text-align: center;
      max-width: 120rem;
   }

   .image {
      max-width: 60rem;
      width: 100%;
      border-radius: 10%;
      border: .5rem solid ${({$theme}) => $theme.shadowColor};
      box-shadow: .5rem .5rem 1rem ${({$theme}) => $theme.secondaryColor};
   }

   @media(max-width: 768px) {
      .description {
         text-align: justify;
         font-size: ${fontSize.basicSize};
      }
   }
`;
