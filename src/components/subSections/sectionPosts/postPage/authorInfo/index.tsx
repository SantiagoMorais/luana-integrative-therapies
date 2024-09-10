import { fontSize, fontWeight, ITheme } from "@styles/theme";
import styled from "styled-components";
import noAvatarPhoto from "@assets/imgs/noAvatarPhoto.jpg";
import { useThemeContext } from "hooks/useThemeContext";

interface IAuthorInfoProps {
   autor?: {
      nome: string;
      cro?: number;
      descricao: string;
      avatar: {
         url: string;
      };
   };
}

export const AuthorInfo: React.FC<IAuthorInfoProps> = ({ autor }) => {
   const theme = useThemeContext();

   return (
      <Container $theme={theme}>
         {autor?.avatar?.url ? (
            <img
               src={autor?.avatar?.url}
               alt="Foto do(a) autor(a) do artigo"
               className="profilePhoto"
            />
         ) : (
            <img
               src={noAvatarPhoto}
               alt="Foto do(a) autor(a) do artigo"
               className="profilePhoto"
            />
         )}
         <div className="about">
            <h3 className="name">
               Por: {autor?.nome ? autor.nome : "Autor não informado"}
            </h3>
            <p className="text">
               {autor?.descricao
                  ? autor.descricao
                  : "Descrição do autor não informada"}
            </p>
            <div className="medicalRegistry">
               {autor?.cro && <p className="registry">CRM: {autor?.cro}</p>}
            </div>
         </div>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   width: 80%;
   display: flex;
   align-items: center;
   gap: 2rem;
   padding: 2rem 0;

   .profilePhoto {
      max-width: 15rem;
      width: 100%;
      max-height: 15rem;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: 0 0 1rem ${({ $theme }) => $theme.secondaryColor};
   }

   .about {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .name {
         font-size: ${fontSize.smallSize};
      }

      .text {
         font-size: ${fontSize.smallSize};
         font-size: calc(${fontSize.smallSize} - 20%);
      }

      .medicalRegistry {
         display: flex;

         .registry {
            font-size: calc(${fontSize.smallSize} - 20%);
            font-weight: ${fontWeight.medium};

            &:not(:last-child)::after {
               content: "-";
               margin: 0 0.5rem;
            }
         }
      }
   }

   @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;

      .profilePhoto {
         max-width: 50dvw;
         max-height: 50dvw;
      }

      .about {
         .name {
            text-align: center;
         }

         .text {
            text-align: justify;
         }

         .medicalRegistry {
            justify-content: center;
         }
      }
   }
`;
