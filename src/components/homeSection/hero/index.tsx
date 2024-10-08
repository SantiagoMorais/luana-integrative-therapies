import styled, { keyframes } from "styled-components";
import heroImage from "@assets/imgs/heroImageLargeScreenDevices.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { fontSize, fontWeight, defaultFontFamily, ITheme } from "@styles/theme";
import { useThemeContext } from "hooks/useThemeContext";

export const Hero = () => {
   const theme = useThemeContext();

   return (
      <Container $theme={theme}>
         <div className="slogan">
            <h2 className="title">Harmonizando Energia e Saúde</h2>
            <h3 className="subtitle">
               Descubra uma jornada de cura e harmonia através de terapias
               integrativas.
            </h3>
         </div>
         <FontAwesomeIcon
            className="icon"
            icon={faArrowDown}
            data-testid="fontAwesomeIcon"
         />
      </Container>
   );
};

const animation = keyframes`
    0% {
        transform: translateY(0);
        opacity: .4;
    };
    50% {
        transform: translateY(1rem);
        opacity: 1;
    };
    100% {
        transform: translateY(0);
        opacity: .4;
    }
`;

const Container = styled.div<{ $theme: ITheme }>`
   flex-grow: 1;
   background: ${({ $theme }) => $theme.secondaryTextColor} url(${heroImage})
      no-repeat 15dvw 10%;
   width: 100%;
   height: 100%;
   background-size: cover;
   position: relative;
   border: solid ${({ $theme }) => $theme.secondaryTextColor};
   border-width: 0.2dvw 0;

   .slogan {
      position: absolute;
      width: 35dvw;
      left: 8dvw;
      top: 11dvh;
      color: ${({ $theme }) => $theme.textColor};
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .title {
         font-size: 4.25dvw;
         font-weight: ${fontWeight.bold};
         line-height: 90%;
         color: ${({ $theme }) => $theme.textColor};
         text-transform: uppercase;
         filter: drop-shadow(0 0 0.2rem #587aaa);
      }

      .subtitle {
         font-size: 2.35dvw;
         font-weight: ${fontWeight.medium};
         color: ${({ $theme }) => $theme.textColor};
         filter: drop-shadow(
            0 0 0.2rem ${({ $theme }) => $theme.secondaryColor}
         );
         font-family: ${defaultFontFamily};
      }
   }

   .icon {
      font-size: 2.4dvw;
      position: absolute;
      bottom: 3dvh;
      right: 0;
      left: 0;
      margin: auto;
      animation: ${animation} 2s infinite;
      filter: drop-shadow(
         0 0 0.5rem ${({ $theme }) => $theme.secondaryTextColor}
      );
      z-index: 2;
   }

   &::after,
   &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      pointer-events: none;
   }

   &::after {
      left: 14.9dvw;
      width: 20dvw;
      background: linear-gradient(
         to left,
         rgba(255, 255, 255, 0),
         ${({ $theme }) => $theme.secondaryTextColor}
      );
   }

   &::before {
      left: 0;
      width: 15dvw;
      background: ${({ $theme }) => $theme.secondaryTextColor};
   }

   @media (max-width: 1920px) {
      border-width: 0.3rem 0;

      .slogan {
         width: 35%;
         left: 8%;
         top: 12%;

         .title {
            font-size: 9rem;
         }

         .subtitle {
            font-size: 5rem;
         }
      }

      .icon {
         font-size: 5rem;
         bottom: 3rem;
      }
   }

   @media (max-width: 1200px) {
      background-position: left 10%;

      .slogan {
         .title {
            font-size: 6rem;
         }

         .subtitle {
            font-size: ${fontSize.extraLargeSize};
         }
      }

      .icon {
         font-size: ${fontSize.extraLargeSize};
         bottom: 2.5rem;
      }
   }

   @media (max-width: 900px) {
      background-position: center 10%;

      .slogan {
         width: 80%;
         left: 0;
         right: 0;
         margin: auto;
         text-align: center;
         bottom: 5rem;
         top: auto;
         gap: 0;

         .title {
            font-size: 5rem;
         }

         .subtitle {
            font-size: ${fontSize.largeSize};
         }
      }

      .icon {
         font-size: ${fontSize.largeSize};
         bottom: 1.5rem;
      }

      &::after,
      &::before {
         left: 0;
         right: 0;
         top: auto;
         width: 100%;
      }

      &::before {
         bottom: 0;
         height: 8rem;
      }

      &::after {
         bottom: 7.9rem;
         height: 10rem;
         background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            ${({ $theme }) => $theme.secondaryTextColor}
         );
      }
   }

   @media (max-width: 768px) {
      .slogan {
         bottom: 4rem;
         .title {
            font-size: ${fontSize.extraLargeSize};
         }

         .subtitle {
            font-size: 2.6rem;
         }
      }

      .icon {
         font-size: ${fontSize.mediumSize};
      }
   }

   @media (max-width: 425px) {
      .slogan {
         width: 80%;

         .title {
            font-size: 3.2rem;
         }

         .subtitle {
            font-size: 2.1rem;
         }
      }

      .icon {
         bottom: 1rem;
      }
   }
`;
