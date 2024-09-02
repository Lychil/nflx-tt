import styled from "styled-components";
import { borderRaduis, colors, font } from "./styleConstants";
import { square } from "./styleHelpers";

export const Container = styled('div')`
max-width: 1150px;
padding-inline: 20px;
margin: 0 auto;
height: 100vh;
display: grid;
grid-template-rows: 50px auto 150px;
`;

export const Content = styled('main')`
height: 100%;
`;

export const Logo = styled('img')`
width: 85px;
height: 30px;
`;

export const ItemsCounter = styled('div')`
position: absolute;
top: -8px;
right: -8px;
${square(18)};
display: flex;
justify-content: center;
border-radius: ${borderRaduis.circle};
background-color: ${colors.accent};
`;

export const ItemsCounterText = styled('p')`
font-size: ${font.sizes.small};
font-weight: ${font.weights.medium};
color: ${colors.whiteTotal};
`;