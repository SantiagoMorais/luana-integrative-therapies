import styled from "styled-components";
import data from "@json/index.json";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { DepositionsCarousel } from "./depositionsCarousel";
import { useThemeContext } from "hooks/useThemeContext";

export const Depositions = () => {
   const theme = useThemeContext();

   const getTopicsInfo = () => {
      interface IDepositions {
         id: string;
         deposition: string;
         name: string;
      }

      const topicInfo: IDepositions[] = data.depositions.map((deposition) => {
         return {
            id: deposition.patientName,
            deposition: deposition.deposition,
            name: deposition.patientName,
         };
      });

      return topicInfo;
   };

   return (
      <Container $theme={theme}>
         <h2 className="title">Depoimentos de pacientes</h2>
         <div className="content">
            <div className="depositions">
               <DepositionsCarousel info={getTopicsInfo()} slidesNumber={2} />
            </div>
         </div>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   margin-bottom: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;

   .title {
      width: 100%;
      text-align: center;
      font-size: ${fontSize.extraLargeSize};
      font-weight: ${fontWeight.medium};
      background-color: ${({ $theme }) => $theme.primaryColor};
      padding: 2rem 0;
   }

   .content {
      display: flex;
      justify-content: center;
      max-width: 144rem;
      width: 100%;

      .depositions {
         width: 100%;
         padding: 2rem;
         font-size: ${fontSize.extraLargeSize};
      }
   }

   @media (max-width: 425px) {
      margin-bottom: 1rem;

      .title {
         font-size: ${fontSize.mediumSize};
      }
   }
`;
