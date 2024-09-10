import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { navigationLinks } from "@json/index.json";
import { googleMapsLink } from "@utils/variables";
import { fontSize, IDefaultTheme, ISectionsTheme, theme } from "@styles/theme";
import { handlePageTheme, locationName } from "@utils/functions";

export const NavBar = () => {
   const [hamburgerIconClicked, setHamburgerIconClicked] = useState(false);
   const location = useLocation();

   const handleOpenAccordion = () => {
      setHamburgerIconClicked(!hamburgerIconClicked);
   };

   return (
      <Container $theme={handlePageTheme(locationName(location))}>
         <button
            className={`accordionButton ${
               hamburgerIconClicked ? "clicked" : ""
            }`}
            onClick={() => {
               handleOpenAccordion();
            }}
            data-testid="accordionButton"
         >
            <FontAwesomeIcon
               className="hamburgerIcon"
               icon={hamburgerIconClicked ? faTimes : faBars}
               data-testid="hamburgerIcon"
            />
         </button>
         <ul className={`navBar ${hamburgerIconClicked ? "clicked" : ""}`}>
            {navigationLinks.map((navButton, index) =>
               navButton.link !== null ? (
                  <Link key={index} to={`/${navButton.link}`}>
                     <li
                        className={`link ${
                           locationName(location) === navButton.link ? "selected" : ""
                        }`}
                     >
                        {navButton.name}
                     </li>
                  </Link>
               ) : (
                  <a className="link" href={googleMapsLink} target="_blank">
                     <li className="googleLink">{navButton.name}</li>
                  </a>
               )
            )}
         </ul>
      </Container>
   );
};

const Container = styled.nav<{ $theme: ISectionsTheme | IDefaultTheme }>`
   padding-bottom: 2rem;

   .accordionButton {
      display: none;
      cursor: pointer;
      width: 12rem;
      background: none;
      border: none;

      &:hover > .hamburgerIcon {
         opacity: 0.6;
      }

      &.clicked > .hamburgerIcon {
         transform: rotate(90deg);
      }

      .hamburgerIcon {
         font-size: ${fontSize.mediumSize};
         transition: 0.3s;
      }
   }

   .navBar {
      display: flex;
      gap: 1rem;

      .link {
         font-size: ${fontSize.smallSize};
         padding: 0.5rem;
         border-radius: 1rem;
         cursor: pointer;
         transition: 0.3s;
         text-transform: capitalize;
         color: ${theme.textColor};

         .googleLink {
            color: ${theme.textColor};
            transition: 0.3s;
         }

         &:hover {
            color: ${theme.secondaryTextColor};
            background-color: ${({$theme}) => $theme.secondaryColor};

            .googleLink {
               color: ${theme.secondaryTextColor};
            }
         }

         &.selected {
            color: ${theme.secondaryTextColor};
            background-color: ${({$theme}) => $theme.secondaryColor};
         }
      }
   }

   @media (max-width: 630px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      position: relative;
      padding-bottom: 1rem;

      .accordionButton {
         display: block;
      }

      .navBar {
         flex-direction: column;
         text-align: center;
         height: 0;
         overflow: hidden;
         position: absolute;
         z-index: 10;
         background-color: none;
         top: 4rem;
         width: max-content;
         border-radius: 0 0 1rem 1rem;
         transition: 0.3s;
         border: solid transparent;
         border-width: 0 0.3rem 0.3rem 0.3rem;
         padding: 0 1rem;
         transform: translateY(-1rem);

         &.clicked {
            transform: translateY(0rem);
            height: 22rem;
            border-color: ${theme.secondaryTextColor};
            background-color: ${({$theme}) => $theme.primaryColor};
         }
      }
   }
`;
