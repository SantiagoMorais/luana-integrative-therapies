import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { Link } from "react-router-dom";
import styled from "styled-components";
import image404 from "@assets/imgs/Error404.jpg";
import { useThemeContext } from "hooks/useThemeContext";

export const PageNotFound = () => {
   const theme = useThemeContext();

   return (
      <Container $theme={theme}>
         <Header />
         <section className="content404">
            <div className="info">
               <h2 className="title">Erro 404 - Página não encontrada</h2>
               <p className="advise">
                  Desculpe, parece que a página que você está procurando não
                  existe ou está em atualização. Por favor, verifique a URL e
                  tente novamente. Se você acredita que isso pode ser um erro,
                  por favor entre em contato conosco para que possamos resolver
                  o problema.
               </p>
               <p className="advise">
                  Enquanto isso, use a barra de navegação acima para retornar à
                  página inicial ou clique <Link to={"/"}>aqui</Link> para
                  retornar rapidamente.
               </p>
               <p className="advise">Agradecemos sua compreensão!</p>
            </div>
            <img src={image404} alt="Erro 404" className="errorImage" />
         </section>
         <Footer />
      </Container>
   );
};

const Container = styled.section<{ $theme: ITheme }>`
   min-height: 100vh;
   display: flex;
   flex-direction: column;

   .content404 {
      width: 100%;
      padding: 2rem;
      display: flex;
      align-items: center;
      flex: 1;
      flex-direction: column;
      font-size: 2.5rem;
      font-weight: 300;
      margin-top: 2rem;

      .info {
         max-width: 108rem;
         display: flex;
         flex-direction: column;
         align-items: center;
         gap: 2rem;

         .title {
            font-size: ${fontSize.extraLargeSize};
            font-weight: 400;
            text-align: center;
         }

         .advise {
            width: 100%;

            a {
               font-weight: ${fontWeight.semiBold};
               color: ${({ $theme }) => $theme.secondaryColor};
            }
         }
      }

      .errorImage {
         max-width: 40rem;
         margin-top: 2rem;
         width: 100%;
         border-radius: 30%;
         border: 1rem solid ${({ $theme }) => $theme.primaryColor};
         filter: saturate(150%);
      }
   }

   @media (max-width: 425px) {
      .content404 {
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
