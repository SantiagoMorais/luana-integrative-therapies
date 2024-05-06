import { NavBarContext } from "@contexts/navBarContext";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "@styles/theme"
import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

export const NavBar = () => {
    const { currentLink, setCurrentLink } = useContext(NavBarContext);
    const [hamburgerIconClicked, setHamburgerIconClicked] = useState(false);

    const handlePageChange = (link: string) => {
        setCurrentLink(link)
    }

    const handleOpenAccordion = () => {
        setHamburgerIconClicked(!hamburgerIconClicked)
    }

    const links = [
        { name: "home", link: "/" },
        { name: "sobre mim", link: "/about" },
        { name: "contato", link: "/contact" },
        { name: "equilibrium", link: "/coming-soon" },
        { name: "segredos da lua", link: "/coming-soon" }
    ]

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
                {currentLink !== null && links.map((navButton, index) =>
                    <Link key={index} to={navButton.link}>
                        <li
                            className={`link ${currentLink === navButton.name ? "selected" : ""}`}
                            onClick={() => { handlePageChange(navButton.name) }}>
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
            z-index: 2;
            background-color: ${theme.primaryColor};
            top: 4rem;
            padding: 0 1rem;
            width: max-content;
            border-radius: 0 0 1rem 1rem;
            transition: .3s;

            &.clicked {
                height: 22rem;
            }
        }
    }
`