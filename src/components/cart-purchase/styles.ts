import styled from "styled-components";
import { borderRaduis, borderStyles, colors, font, shadows, transitions } from "@/common/styles/styleConstants";

export const CartPurchaseWrapper = styled('div')`
height: 100%;
width: 350px;
padding-top: 20px;
background-color: ${colors.whiteTotal};
box-shadow: ${shadows.default};
border-radius: ${borderRaduis.medium};
`;

export const CartPurchaseTotal = styled('div')`
display: flex;
justify-content: space-between;
margin-inline: 20px;
margin-bottom: 15px;
`;

export const CartPurchaseTotalText = styled('p')`
font-size: ${font.sizes.small};
`;

export const CartPurchaseBtn = styled('button')`
width: 100%;
padding: 22px 0;
color: ${colors.whiteTotal};
border-radius: ${borderRaduis.medium};
border: ${borderStyles.blackSmall};
background-color: ${colors.blackTotal};
transition: ${transitions.medium};

&:hover {
    color: ${colors.blackTotal};
    background-color: ${colors.whiteTotal};
}
`;