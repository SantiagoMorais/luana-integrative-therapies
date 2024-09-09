import { fontSize, fontWeight, theme } from "@styles/theme";
import styled from "styled-components";
import { aboutMe } from "@json/index.json";
import professionalImage from "@assets/imgs/professionalImage.jpg";

export const AboutMeText = () => {
   return (
      <Container>
         <h2 className="title">Sobre mim</h2>
         <p className="aboutText">
            <img
               src={professionalImage}
               alt="Imagem profissional Dra. Luana"
               className="aboutImage"
            />
            {aboutMe.map((paragraph, index) => (
               <span key={index} className="paragraph">
                  {paragraph}
               </span>
            ))}
            
         </p>
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
      .aboutImage {
         float: left;
         height: auto;
         min-height: 30rem;
         max-height: 50rem;
         object-fit: cover;
         object-position: center;
         border-radius: 0.5rem;
         border: 0.2rem solid ${theme.primaryColor};
         width: 30%;
         max-width: 50rem;
         margin: 0rem 2rem 1rem 0rem;
      }

      .paragraph {
         display: block;
         text-align: justify;
         color: ${theme.textColor};
         font-size: ${fontSize.basicSize};
         text-indent: 3rem;
      }
   }

   @media (max-width: 768px) {
      .aboutText {
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 2rem;

         .aboutImage {
            width: 100%;
            margin: 0;
         }
      }
   }
`;
