import styled from "styled-components";
import commingSoonImage from "@assets/imgs/pageComingSoon.jpg";
import { fontSize, fontWeight, theme } from "@styles/theme";

export const NoPosts = () => {
   return (
      <Container>
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

const Container = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   padding: 0 2rem 2rem;

   .title {
      font-size: ${fontSize.extraLargeSize};
      font-weight: ${fontWeight.medium};
      color: ${theme.textColor};
      text-align: center;
   }

   .description {
      font-size: ${fontSize.mediumSize};
      font-weight: ${fontWeight.medium};
      color: ${theme.textColor};
      text-align: center;
      max-width: 120rem;
   }

   .image {
      max-width: 60rem;
      width: 100%;
      border-radius: 10%;
      border: 1rem solid ${theme.primaryColor};
   }

   @media(max-width: 768px) {
      .description {
         text-align: justify;
         font-size: ${fontSize.basicSize};
      }
   }
`;
