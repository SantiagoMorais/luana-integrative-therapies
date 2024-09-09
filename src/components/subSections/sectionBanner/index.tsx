import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fontSize, fontWeight, theme } from "@styles/theme";
import styled from "styled-components";
import data from "@json/index.json";
import { SectionsButtons } from "./sectionsButtons";
import { SectionsAbout } from "./sectionsAbout";
import equilibriumLogo from "@assets/imgs/equilibrium-logo.jpeg";
import segredosDaLuaLogo from "@assets/imgs/segredos-da-lua-logo.jpeg";
import { useLocation } from "react-router-dom";

interface ISectionBannerProps {
   sectionSelected: "equilibrium" | "segredos-da-lua" | "";
}

export const SectionBanner: React.FC<ISectionBannerProps> = ({
   sectionSelected,
}) => {
   const location = useLocation();
   const locationName = location.pathname.slice(1).split("/")[0];

   const content = data.sectionsInfo.find(
      (section) => section.id === sectionSelected
   );

   const currentLogo = () => {
      switch (locationName) {
         case "equilibrium":
            return equilibriumLogo;
         case "segredos-da-lua":
            return segredosDaLuaLogo;
      }
   };

   return (
      <Container>
            <img src={currentLogo()} alt="" className="logo" />
            <h2 className="title">{content?.title}</h2>
            <h3 className="subtitle">
               <FontAwesomeIcon icon={faCircle} className="icon" />
               {content?.subtitle}
               <FontAwesomeIcon icon={faCircle} className="icon" />
            </h3>
            <p className="description">{content?.description}</p>
            <SectionsAbout />
            <SectionsButtons />
      </Container>
   );
};

const Container = styled.div`
   width: 100%;
   display: flex;
      flex-direction: column;
      align-items: center;
      padding: 4rem 2rem 2rem;
      gap: 2rem;
      position: relative;

      .logo {
         border-radius: 50%;
         height: 20rem;
         width: auto;
         opacity: 0.8;
         transition: 0.3s;
         &:hover {
            opacity: 1;
            scale: 1.1;
         }
      }

      .title {
         font-size: 6rem;
         font-weight: ${fontWeight.bold};
         text-transform: uppercase;
         position: relative;

         &::after {
            content: "";
            position: absolute;
            left: -25%;
            bottom: -0.5rem;
            height: 0.2rem;
            width: 150%;
            background: linear-gradient(
               to right,
               transparent 0%,
               ${theme.tertiaryColor} 30%,
               ${theme.tertiaryColor} 70%,
               transparent
            );
         }
      }

      .subtitle {
         font-size: ${fontSize.mediumSize};
         font-weight: ${fontWeight.medium};
         color: ${theme.tertiaryColor};
         display: flex;
         gap: 1rem;
         align-items: baseline;
         text-align: center;

         .icon {
            font-size: ${fontSize.smallSize};
            color: ${theme.primaryColor};
            opacity: 0.8;
         }
      }

      .description {
         text-align: center;
         max-width: 100rem;
         font-size: ${fontSize.basicSize};
      }
   }

   @media (max-width: 768px) {
      .content {
         .title {
            font-size: ${fontSize.extraLargeSize};
         }

         .subtitle {
            font-size: ${fontSize.mediumSize};
         }
      }
   }
`;
