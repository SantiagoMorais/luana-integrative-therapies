import styled from "styled-components";
import { aboutTheCompany } from "@json/index.json";
import { useLocation } from "react-router-dom";
import { fontSize, fontWeight, theme } from "@styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { locationName } from "@utils/functions";

export const SectionsAbout = () => {
   const [sectionClicked, setSectionClicked] = useState<boolean>(false);
   const location = useLocation();

   const currentSection = aboutTheCompany.find(
      (info) => info.id === locationName(location)
   );

   const handleOpenSection = () => {
      setSectionClicked(!sectionClicked);
   };

   return (
      <Container>
         <div className="infoBar" onClick={handleOpenSection}>
            <p className="infoTitle">{currentSection?.title}</p>
            <FontAwesomeIcon
               icon={faChevronDown}
               className={`icon ${sectionClicked && "rotate"}`}
            />
         </div>
         <Collapse isOpened={sectionClicked}>{currentSection?.about}</Collapse>
      </Container>
   );
};

const Container = styled.div`
   max-width: 100rem;
   display: flex;
   flex-direction: column;
   font-size: ${fontSize.smallSize};
   cursor: pointer;

   .ReactCollapse--collapse {
      transition: height 0.5s ease;
      margin: 1rem 0;
      padding: 0 1rem;
      text-align: justify;
      font-size: ${fontSize.smallSize};
   }

   &:hover > .infoBar {
      opacity: 0.6;
   }

   .infoBar {
      font-size: ${fontSize.mediumSize};
      padding-bottom: 0.5rem;
      border-bottom: 0.2rem solid ${theme.secondaryColor};
      transition: 0.3s;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      font-weight: ${fontWeight.medium};

      .infoTitle {
         width: 100%;
         text-align: center;
      }

      .icon {
         transition: 0.5s ease;

         &.rotate {
            transform: rotate(180deg);
         }
      }
   }

   @media (max-width: 768px) {
      padding: 0 2rem;

      .infoBar {
         text-align: center;
         font-size: ${fontSize.basicSize};
      }
   }
`;
