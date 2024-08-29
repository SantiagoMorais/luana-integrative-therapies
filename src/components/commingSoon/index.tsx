import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imageComingSoon from "@assets/imgs/pageComingSoon.jpg";

export const CommingSoon = () => {
   return (
      <Container>
         <Header />
         <section className="commingSoonContent">
            <div className="info">
               <h2 className="title">Em Breve: Novidades Estão Chegando!</h2>
               <p className="advise">
                  Estamos trabalhando duro para trazer novidades incríveis para
                  você!
               </p>
               <p className="advise">
                  Esta parte do nosso site está em desenvolvimento e em breve
                  estará disponível para proporcionar uma experiência ainda
                  melhor. Estamos ansiosos para compartilhar tudo com você!
                  Enquanto isso, explore as outras seções do nosso site e fique
                  atento para mais atualizações.
               </p>
               <p className="advise">
                  Obrigado pela sua paciência e apoio! Clique{" "}
                  <Link to="/">aqui</Link> para retornar ao nosso site!
               </p>
            </div>
            <img
               src={imageComingSoon}
               alt="Em breve"
               className="commingSoonImage"
            />
         </section>
         <Footer />
      </Container>
   );
};

const Container = styled.section`
   min-height: 100vh;
   display: flex;
   flex-direction: column;

   .commingSoonContent {
      width: 100%;
      padding: 2rem;
      display: flex;
      align-items: center;
      flex: 1;
      flex-direction: column;
      font-size: ${fontSize.basicSize};
      font-weight: ${fontWeight.thin};
      margin-top: 2rem;

      .info {
         max-width: 108rem;
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 2rem;

         .title {
            font-size: ${fontSize.extraLargeSize};
            font-weight: ${fontWeight.medium};
            text-align: center;
         }

         .advise {
            width: 100%;

            a {
               font-weight: ${fontWeight.medium};
               color: ${theme.secondaryColor};
            }
         }
      }

      .commingSoonImage {
         margin-top: 2rem;
         max-width: 40rem;
         width: 100%;
         border-radius: 30%;
         border: 1rem solid ${theme.primaryColor};
         filter: saturate(150%);
      }
   }

   @media (max-width: 425px) {
      .commingSoonContent {
         .info {
            .title {
               font-size: ${fontSize.mediumSize};
            }

            .advise {
               font-size: ${fontSize.smallSize};
            }
         }
      }
   }
`;
