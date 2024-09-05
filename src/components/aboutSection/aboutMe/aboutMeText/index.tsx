import { fontSize, fontWeight, theme } from "@styles/theme";
import styled from "styled-components";
import { aboutMe } from "@json/index.json";

export const AboutMeText = () => {
   return (
      <Container>
         <h2 className="title">Sobre mim</h2>
         <div className="aboutText">
            {aboutMe.map((paragraph, index) => (
               <p className="paragraph" key={index}>
                  {paragraph}
               </p>
            ))}
         </div>
      </Container>
   );
};

const Container = styled.div`
   max-width: 144rem;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   font-size: ${fontSize.basicSize};
   font-weight: ${fontWeight.thin};
   align-items: center;
   margin-bottom: 4rem;

   .aboutText {
      display: flex;
      flex-direction: column;

      .paragraph {
         text-align: justify;
         color: ${theme.textColor};
         font-size: ${fontSize.basicSize};
         text-indent: 3rem;
      }
   }
`;
