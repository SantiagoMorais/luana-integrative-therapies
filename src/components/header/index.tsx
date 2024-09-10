import styled from "styled-components";
import { NavBar } from "./navBar";
import {
   fontSize,
   fontWeight,
   defaultFontFamily,
   ITheme,
} from "@styles/theme";
import { Link } from "react-router-dom";
import { useThemeContext } from "hooks/useThemeContext";

export const Header = () => {
   const theme = useThemeContext();

   return (
      <Container $theme={theme}>
         <div className="content">
            <Link to="/" className="title">
               <h1 className="nameTitle">Luana Vasconcellos Alvarenga</h1>
               <h2 className="professionalTitle">
                  Cirurgiã Dentista e Terapeuta Integrativa
               </h2>
            </Link>
            <NavBar />
         </div>
      </Container>
   );
};

const Container = styled.section<{ $theme: ITheme }>`
   background: linear-gradient(
      90deg,
      ${({ $theme }) => $theme.primaryColor} 0%,
      ${({ $theme }) => $theme.tertiaryColor} 100%
   );
   display: flex;
   justify-content: center;

   .content {
      width: 100%;
      max-width: 144rem;
      padding: 0 4rem;
      display: flex;
      justify-content: space-around;
      align-items: baseline;
      flex-wrap: wrap;

      .title {
         position: relative;
         width: 34rem;
         transition: 0.3s;

         .nameTitle {
            font-size: ${fontSize.mediumSize};
            font-family: ${defaultFontFamily};
            font-weight: ${fontWeight.semiBold};
            margin-bottom: 2rem;
            color: ${({ $theme }) => $theme.textColor};

            &::first-letter {
               font-size: 166%;
               font-family: ${defaultFontFamily};
            }
         }

         .professionalTitle {
            color: ${({ $theme }) => $theme.textColor};
            font-size: 1.8rem;
            font-weight: ${fontWeight.semiBold};
            opacity: 0.8;
            position: absolute;
            bottom: 1.3rem;
            left: 3rem;
            letter-spacing: 0.1rem;
            text-transform: capitalize;
         }

         &:hover {
            opacity: 0.6;
         }
      }
   }

   @media (max-width: 630px) {
      .content {
         flex-direction: column;
         align-items: center;
         justify-content: center;
         align-items: center;
      }
   }

   @media (max-width: 475px) {
      background: linear-gradient(
         180deg,
         ${({ $theme }) => $theme.tertiaryColor} 0%,
         ${({ $theme }) => $theme.primaryColor} 90%
      );

      .content {
         padding: 0;

         .title {
            text-align: center;
            width: 100%;
            padding-bottom: 1.5rem;

            .nameTitle {
               font-size: 8dvw;
               font-weight: ${fontWeight.semiBold};
               margin: 1rem 0 0;
               line-height: 0.7;

               .firstLetter {
                  font-size: ${fontSize.extraLargeSize};
               }
            }

            .professionalTitle {
               font-size: 4.2dvw;
               position: static;
            }
         }
      }
   }
`;
