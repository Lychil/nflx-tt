import { createGlobalStyle } from "styled-components";
import { colors, font } from "./styleConstants";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: ${font.sizes.main};
    color: ${colors.blackTotal};
    background-color: ${colors.grayLight};
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0; 
}

button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;  
    font: inherit;
    color: inherit;
    text-align: center;
    cursor: pointer;
    appearance: none;
}
`;