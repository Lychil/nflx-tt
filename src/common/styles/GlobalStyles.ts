import { createGlobalStyle } from "styled-components";
import { colors } from "./styleConstants";

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
    font-size: 17px;
    background-color: ${colors.grayLight};
}
`;