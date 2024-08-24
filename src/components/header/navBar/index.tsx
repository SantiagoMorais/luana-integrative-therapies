import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "@styles/theme"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components"
import data from "@json/index.json"

export const NavBar = () => {
    const [hamburgerIconClicked, setHamburgerIconClicked] = useState(false);
    const location = useLocation();

    const locationPath = location.pathname.slice(1);
    const locationName = locationPath.split('/')[0];

    const handleOpenAccordion = () => {
        setHamburgerIconClicked(!hamburgerIconClicked)
    }

    return (
        <Container>
            <button
                className={`accordionButton ${hamburgerIconClicked ? "clicked" : ''}`}
                onClick={() => { handleOpenAccordion() }}
                data-testid="accordionButton">
                <FontAwesomeIcon
                    className="hamburgerIcon"
                    icon={hamburgerIconClicked ? faTimes : faBars}
                    data-testid="hamburgerIcon"
                />
            </button>
            <ul className={`navBar ${hamburgerIconClicked ? "clicked" : ''}`}>
                {data.navigationLinks.map((navButton, index) =>
                    <Link key={index} to={`/${navButton.link}`}>
                        <li className={`link ${locationName === navButton.link ? "selected" : ""}`}>
                            {navButton.name}
                        </li>
                    </Link>
                )}
            </ul>
        </Container>
    )
}

const Container = styled.nav`
    padding-bottom: 2rem;

    .accordionButton {
        display: none;
        cursor: pointer;
        width: 12rem;
        background: none;
        border: none;

        &:hover > .hamburgerIcon {
            opacity: .6;
        }

        &.clicked > .hamburgerIcon {
            transform: rotate(90deg);
        }

        .hamburgerIcon {
            font-size: 3rem;
            transition: .3s;
        }
    }

    .navBar {
        display: flex;
        gap: 1rem;

        .link {
            font-size: 2rem;
            padding: .5rem;
            border-radius: 1rem;
            cursor: pointer;
            transition: .3s;
            text-transform: capitalize;
            color: ${theme.textColor};

            &:hover {
                color: ${theme.secondaryTextColor};
                background-color: ${theme.secondaryColor};
            }

            &.selected {
                color: ${theme.secondaryTextColor};
                background-color: ${theme.secondaryColor};
            }
        }
    }

    @media (max-width: 543px) {
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
            background-color: ${theme.primaryColor};
            top: 4rem;
            width: max-content;
            border-radius: 0 0 1rem 1rem;
            transition: height .3s, border-color .3s, transform .3s;
            border: solid transparent;
            border-width: 0 .3rem .3rem .3rem;
            padding: 0 1rem;
            transform: translateY(-1rem);
            
            &.clicked {
                transform: translateY(0rem);
                height: 22rem;
                border-color: ${theme.secondaryTextColor};
            }
        }
    }
`