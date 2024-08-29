import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontWeight, theme } from "@styles/theme";
import styled from "styled-components";
import { SectionsButtons } from "./sectionsButtons";

export const EquilibriumBanner = () => {
   return (
      <Container>
         <h2 className="title">Equilibrium</h2>
         <h3 className="subtitle">
            <FontAwesomeIcon icon={faCircle} className="icon" />
            Equilíbrio e Bem-estar com as Terapias Integrativas
            <FontAwesomeIcon icon={faCircle} className="icon" />
         </h3>
         <p className="description">
            Descubra como nossas terapias promovem o equilíbrio e bem-estar.
            Conheça nossas técnicas, explore publicações valiosas e veja como
            essas abordagens naturais podem transformar sua saúde e proporcionar
            uma vida.
         </p>
         <SectionsButtons />
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 2rem;
   gap: 2rem;

   .title {
      font-size: 6rem;
      font-weight: ${fontWeight.bold};
      text-transform: uppercase;
      position: relative;

      &::after {
         content: "";
         position: absolute;
         left: -25%;
         bottom: -0.5rem;
         height: 0.2rem;
         width: 150%;
         background: linear-gradient(
            to right,
            transparent 0%,
            ${theme.tertiaryColor} 30%,
            ${theme.tertiaryColor} 70%,
            transparent
         );
      }
   }

   .subtitle {
      font-size: ${fontSize.mediumSize};
      font-weight: ${fontWeight.medium};
      color: ${theme.tertiaryColor};
      display: flex;
      gap: 1rem;
      align-items: baseline;
      text-align: center;

      .icon {
         font-size: ${fontSize.smallSize};
         color: ${theme.primaryColor};
         opacity: 0.8;
      }
   }

   .description {
      text-align: center;
      max-width: 100rem;
      font-size: ${fontSize.basicSize};
   }

   @media (max-width: 768px) {
      .title {
         font-size: ${fontSize.extraLargeSize};
      }

      .subtitle {
         font-size: ${fontSize.mediumSize};
      }
   }
`;
