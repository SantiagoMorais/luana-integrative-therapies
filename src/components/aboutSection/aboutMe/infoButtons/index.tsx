import { fontSize, fontWeight, theme } from "@styles/theme";
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
   const buttons: IButtons[] = [
      { id: 1, title: "Sobre mim", buttonType: "about-me" },
      { id: 2, title: "Nosso Endereço", buttonType: "address" },
   ];

   return (
      <Container>
         {buttons.map((button) => (
            <button
               key={button.id}
               className={`selectedSection ${
                  buttonSelected === button.buttonType ? "selected" : "notSelected"
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

const Container = styled.div`
   display: flex;
   gap: 2rem;
   position: relative;

   .selectedSection {
      font-size: ${fontSize.basicSize};
      padding: 1rem 0;
      background: none;
      border-radius: 1rem;
      border: none;
      color: ${theme.textColor};
      width: 18rem;
      text-align: center;
      font-weight: ${fontWeight.medium};
      z-index: 2;
      transition: 0.3s;

      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         height: 0.2rem;
         background: linear-gradient(
            to right,
            transparent,
            ${theme.tertiaryColor},
            transparent
         );
         z-index: -1;
         opacity: 0;
         transition: 0.3s;
      }

      &::after {
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         right: 0;
         height: 0.2rem;
         background: linear-gradient(
            to right,
            transparent,
            ${theme.tertiaryColor},
            transparent
         );
         z-index: -1;
         opacity: 0;
         transition: 0.3s;
      }

      &.notSelected {
         cursor: pointer;

         &:hover {
            scale: 1.05;
            opacity: 0.8;

            &::after {
               opacity: 1;
            }

            &::before {
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
         ${theme.secondaryColor} 20%,
         ${theme.secondaryColor} 80%,
         transparent 100%
      );
      z-index: 1;
      transition: 0.5s;
      transform: translateX(-2rem);

      &::before {
         content: "";
         position: absolute;
         top: 0;
         left: 0;
         right: 0;
         height: 0.2rem;
         background: linear-gradient(
            to right,
            transparent,
            ${theme.shadowColor},
            transparent
         );
         z-index: -1;
      }

      &::after {
         content: "";
         position: absolute;
         bottom: 0;
         left: 0;
         right: 0;
         height: 0.2rem;
         background: linear-gradient(
            to right,
            transparent,
            ${theme.shadowColor},
            transparent
         );
         z-index: -1;
      }

      &.addressSelected {
         transform: translateX(18rem);
      }
   }

   &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -50%;
      width: 200%;
      height: 100%;
      background: linear-gradient(
         to right,
         transparent 0%,
         ${theme.primaryColor} 30%,
         ${theme.primaryColor} 70%,
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
`;
