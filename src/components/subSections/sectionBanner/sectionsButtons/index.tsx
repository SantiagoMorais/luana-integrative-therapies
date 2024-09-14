import { PostOrTopicContext } from "@contexts/postOrTopicContext";
import { useContext } from "react";
import styled from "styled-components";
import { fontSize, fontWeight, ITheme } from "@styles/theme";

import { useThemeContext } from "hooks/useThemeContext";

interface IButtons {
   title: string;
   buttonType: "posts" | "topics";
   id: number;
}

export const SectionsButtons = () => {
   const theme = useThemeContext();

   const { handleSelectedButton, postOrTopicSelected } =
      useContext(PostOrTopicContext);

   const buttons: IButtons[] = [
      { title: "Nossas terapias", buttonType: "topics", id: 0 },
      { title: "Nossas publicações", buttonType: "posts", id: 1 },
   ];

   return (
      <Container $theme={theme}>
         {buttons.map((button) => (
            <button
               key={button.id}
               className={`selectSection ${
                  postOrTopicSelected === button.buttonType
                     ? "selected"
                     : "notSelected"
               }`}
               onClick={() => handleSelectedButton(button.buttonType)}
            >
               {button.title}
            </button>
         ))}
         <span
            className={`selectedStyle ${
               postOrTopicSelected === "posts" ? "postsSelected" : ""
            }`}
         ></span>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   display: flex;
   gap: 2rem;
   position: relative;

   .selectSection {
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

            &::after,
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
         ${({ $theme }) => $theme.secondaryColor} 20%,
         ${({ $theme }) => $theme.secondaryColor} 80%,
         transparent 100%
      );
      z-index: 1;
      transition: 0.5s;
      transform: translateX(-2rem);

      &.postsSelected {
         transform: translateX(18rem);
      }
   }

   .selectSection,
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
            /* Valor padrão */ transparent
         );
      }

      &::before {
         top: 0;
      }

      &::after {
         bottom: 0;
      }
   }

   .selectedStyle,
   .selectedStyle {
      &::after,
      &::before {
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

         &.postsSelected {
            transform: translate(-2rem, calc(100%));
         }
      }
   }

   @media (max-width: 420px) {
      padding: 0 2rem;
      max-width: 100%;

      .selectSection, .selectedStyle, &::after {
         width: 100%;
      }

      .selectedStyle {
         transform: none;

         &.postsSelected {
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
