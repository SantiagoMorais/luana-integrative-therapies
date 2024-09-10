import { fontSize, fontWeight, ITheme } from "@styles/theme";
import styled from "styled-components";
import { PresentationBar } from "./presentationBar";
import { AboutMeText } from "./aboutMeText";
import { useState } from "react";
import { InfoButtons } from "./infoButtons";
import { Address } from "./address";
import { useThemeContext } from "hooks/useThemeContext";

export const AboutMe = () => {
   const theme = useThemeContext();
   const [infoSelected, setInfoSelected] = useState<"about-me" | "address">(
      "about-me"
   );

   const handleSelectInfo = (info: "about-me" | "address") => {
      setInfoSelected(info);
   };

   return (
      <Container $theme={theme}>
         <h2 className="title">Um pouco mais sobre Luana</h2>
         <PresentationBar />
         <InfoButtons
            buttonSelected={infoSelected}
            onClick={handleSelectInfo}
         />
         {infoSelected === "about-me" ? <AboutMeText /> : <Address />}
      </Container>
   );
};

export const Container = styled.div<{ $theme: ITheme }>`
   width: 100%;
   padding: 2rem 2rem 4rem;
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: center;
   gap: 4rem;

   .title {
      font-size: ${fontSize.extraLargeSize};
      font-weight: ${fontWeight.medium};
      text-align: center;
      position: relative;
      width: fit-content;

      &::after {
         position: absolute;
         content: "";
         height: 0.2rem;
         width: 150%;
         bottom: -0.4rem;
         left: -25%;
         background: linear-gradient(
            to right,
            transparent 0%,
            ${({ $theme }) => $theme.tertiaryColor} 20%,
            ${({ $theme }) => $theme.tertiaryColor} 80%,
            transparent 100%
         );
      }
   }

   @media (max-width: 425px) {
      .content {
         .aboutText {
            .paragraph {
               font-size: ${fontSize.smallSize};
            }
         }
      }
   }
`;
