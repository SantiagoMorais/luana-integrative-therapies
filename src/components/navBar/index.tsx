import { NavBarContext } from "@contexts/navBarContext";
import { theme } from "@styles/theme"
import { useContext } from "react"
import styled from "styled-components"

export const NavBar = () => {
    const { currentLink, setCurrentLink } = useContext(NavBarContext);

    const handlePageChange = (link: string) => {
        setCurrentLink(link)
    }

    const links = [
        "Home",
        "Sobre Mim",
        "Contato",
        "Equilibrium",
        "Segredos da Lua"
    ];

    return (
        <Container>
            <ul className="navBar">
                {currentLink && links.map((link, index) =>
                    <li
                        key={index}
                        className={`link ${currentLink === link ? "selected" : ""}`}
                        onClick={() => { handlePageChange(link) }}>
                        {link}
                    </li>
                )}
            </ul>
        </Container>
    )
}

const Container = styled.nav`
    .navBar {
        display: flex;
        gap: 1rem;
        
        .link {
            font-size: 2rem;
            padding: .5rem;
            border-radius: 1rem;
            cursor: pointer;
            transition: .3s;

            &:hover {
                color: ${theme.secondaryTextColor};
                background-color: ${theme.tertiaryColor};
            }

            &.selected {
                color: ${theme.secondaryTextColor};
                background-color: ${theme.tertiaryColor};
            }
        }
    }
`