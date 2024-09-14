import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { useThemeContext } from "hooks/useThemeContext";
import styled from "styled-components";

interface IButtons {
   title: string;
   buttonType: "about-me" | "address";
   id: number;
}

interface IInfoButtonsProps {
   buttonSelected: "about-me" | "address";
   onClick: (_info: "about-me" | "address") => void;
}

export const InfoButtons: React.FC<IInfoButtonsProps> = ({
   buttonSelected,
   onClick,
}) => {
   const theme = useThemeContext();

   const buttons: IButtons[] = [
      { id: 1, title: "Sobre mim", buttonType: "about-me" },
      { id: 2, title: "Nosso Endereço", buttonType: "address" },
   ];

   return (
      <Container $theme={theme}>
         {buttons.map((button) => (
            <button
               key={button.id}
               className={`selectedSection ${
                  buttonSelected === button.buttonType
                     ? "selected"
                     : "notSelected"
               }`}
               onClick={() => onClick(button.buttonType)}
            >
               {button.title}
            </button>
         ))}
         <span
            className={`selectedStyle ${
               buttonSelected === "address" && "addressSelected"
            }`}
         ></span>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   display: flex;
   gap: 2rem;
   position: relative;

   .selectedSection {
      font-size: ${fontSize.basicSize};
      padding: 1rem 0;
      background: none;
      border-radius: 1rem;
      border: none;
      color: ${({ $theme }) => $theme.textColor};
      width: 18rem;
      text-align: center;
      font-weight: ${fontWeight.medium};
      z-index: 2;
      transition: 0.3s;

      &.notSelected {
         cursor: pointer;

         &:hover {
            scale: 1.05;
            opacity: 0.8;

            &::before,
            &::after {
               opacity: 1;
            }
         }
      }
   }

   .selectedStyle {
      position: absolute;
      height: 100%;
      width: 22rem;
      left: 0;
      bottom: 0;
      display: inline-block;
      background: linear-gradient(
         to right,
         transparent 0%,
         ${({ $theme }) => $theme.secondaryColor} 20%,
         ${({ $theme }) => $theme.secondaryColor} 80%,
         transparent 100%
      );
      z-index: 1;
      transition: 0.5s;
      transform: translateX(-2rem);

      &.addressSelected {
         transform: translateX(18rem);
      }
   }

   .selectedSection,
   .selectedStyle {
      &::before,
      &::after {
         content: "";
         position: absolute;
         left: 0;
         right: 0;
         height: 0.2rem;
         z-index: -1;
         transition: 0.3s;
         opacity: 0;
         background: linear-gradient(
            to right,
            transparent,
            ${({ $theme }) => $theme.tertiaryColor},
            transparent
         );
      }

      &::before {
         top: 0;
      }

      &::after {
         bottom: 0;
      }
   }

   .selectedStyle {
      &::before,
      &::after {
         background: linear-gradient(
            to right,
            transparent,
            ${({ $theme }) => $theme.shadowColor},
            transparent
         );
      }
   }

   &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -25%;
      width: 150%;
      height: 100%;
      background: linear-gradient(
         to right,
         transparent 0%,
         ${({ $theme }) => $theme.primaryColor} 30%,
         ${({ $theme }) => $theme.primaryColor} 70%,
         transparent 100%
      );
   }

   @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;

      .selectedStyle {
         height: calc(50%);
         bottom: auto;
         top: 0;

         &.addressSelected {
            transform: translate(-2rem, calc(100%));
         }
      }
   }

   @media (max-width: 420px) {
      padding: 0 2rem;
      max-width: 100%;

      .selectedSection,
      .selectedStyle,
      &::after {
         width: 100%;
      }

      .selectedStyle {
         transform: none;

         &.addressSelected {
            transform: translate(0, calc(100%));
         }
      }

      &::after {
         background: ${({ $theme }) => $theme.primaryColor};
         border-radius: 1rem;
         left: 0;
      }
   }
`;


