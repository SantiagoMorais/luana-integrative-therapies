import { fontSize, fontWeight, ITheme } from "@styles/theme";
import { websiteCreatorsLink } from "@utils/variables";
import { useThemeContext } from "hooks/useThemeContext";
import styled from "styled-components";

export const WebsiteCreator = () => {
   const theme = useThemeContext();

   return (
      <Container $theme={theme}>
         <a
            href={websiteCreatorsLink}
            target="_blank"
            className="creator"
            data-testid="websiteCreatorsLink"
         >
            <p className="logo">
               <span className="first-letter">F</span>
               <span className="second-letter">S</span>
            </p>
            Criado por:
            <span className="name">Felipe Santiago Morais</span>
         </a>
      </Container>
   );
};

const Container = styled.div<{ $theme: ITheme }>`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: black;
   padding: .2rem 0;
   letter-spacing: 0.1rem;

   .creator {
      color: ${({ $theme }) => $theme.secondaryTextColor};
      font-weight: ${fontWeight.medium};
      font-size: ${fontSize.smallSize};
      transition: 0.3s;
      opacity: 0.8;
      display: flex;
      align-items: center;

      .logo {
         font-size: ${fontSize.smallSize};
         margin-right: 1rem;
         display: flex;
         justify-content: center;
         align-items: baseline;

         .first-letter {
            font-size: ${fontSize.basicSize};
         }

         .second-letter {
            font-size: ${fontSize.smallSize};
            position: relative;

            &::after {
               content: "";
               height: 0.4rem;
               width: 0.4rem;
               background: orange;
               display: inline-block;
               border-radius: 50%;
               margin-left: 0.1rem;
            }
         }
      }

      .name {
         margin-left: 0.5rem;
         font-weight: ${fontWeight.medium};
      }

      &:hover {
         opacity: 1;
         letter-spacing: 0.2rem;
      }
   }
`;
