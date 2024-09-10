import styled from "styled-components";
import commingSoonImage from "@assets/imgs/pageComingSoon.jpg";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { useLocation } from "react-router-dom";
import {topicsListIsEmptyMessages} from "@json/index.json"
import { locationName } from "@utils/functions";

export const TopicsListIsEmpty = () => {
   const location = useLocation();
   const content = topicsListIsEmptyMessages.find(item => item.id === locationName(location))

   return (
      <Container>
         <h2 className="title">Novos conteúdos em breve!</h2>
         <h3 className="subtitle">
            {content?.subtitle}
         </h3>
         <img
            src={commingSoonImage}
            alt="Novidades em breve"
            className="commingSoonImage"
         />
         <p className="message">
            {content?.description}
         </p>
      </Container>
   );
};

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   width: 100%;

   .title {
      font-size: ${fontSize.extraLargeSize};
      font-weight: ${fontWeight.medium};
      color: ${theme.textColor};
      position: relative;
      width: 100%;
      text-align: center;

      &::after {
         content: "";
         position: absolute;
         left: 0;
         bottom: -0.2rem;
         height: 0.2rem;
         width: 100%;
         background: linear-gradient(
            to right,
            transparent 0%,
            ${theme.tertiaryColor} 30%,
            ${theme.tertiaryColor} 70%,
            transparent 100%
         );
      }
   }

   .subtitle {
      font-size: ${fontSize.largeSize};
      font-weight: ${fontWeight.thin};
      color: ${theme.textColor};
      text-align: center;
   }

   .commingSoonImage {
      width: 50%;
      min-width: 30rem;
      border-radius: 1rem;
      border: solid 0.2rem ${theme.shadowColor};
      box-shadow: 0.5rem 0.5rem 1rem ${theme.secondaryColor};
      margin-bottom: 2rem;
   }

   .message {
      font-size: ${fontSize.mediumSize};
      font-weight: ${fontWeight.thin};
      color: ${theme.textColor};
      text-align: center;
   }

   @media (max-width: 768px) {
      .subtitle {
         font-size: ${fontSize.basicSize};
      }
      .message {
         font-size: ${fontSize.basicSize};
      }

      .commingSoonImage {
         width: 100%;
      }
   }
`;
