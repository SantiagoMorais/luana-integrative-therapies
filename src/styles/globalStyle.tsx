import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Barlow Condensed", sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
