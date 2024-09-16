import styled from "styled-components";
import { borderRaduis, colors, font, shadows } from "@/common/styles/styleConstants";
import { square } from "@/common/styles/styleHelpers";


export const CartItemWrapper = styled('div')`
padding: 18px;
display: flex;
justify-content: space-between;
background-color: ${colors.whiteTotal};
box-shadow: ${shadows.default};
border-radius: ${borderRaduis.medium};
`;

export const CartItemBody = styled('div')`
display: flex;
gap: 24px;
`;

export const CartItemMain = styled('div')``;

export const CartItemDetailsWrapper = styled('div')`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: end;
`;

export const CartItemImg = styled('img')`
${square(150)}
`;

export const CartItemCounterWrapper = styled('div')`
display: flex;
justify-content: space-evenly;
`;

export const CartItemCounterBtn = styled('button')`
display: flex;
cursor: pointer;
${square(30)}
border-radius: ${borderRaduis.circle};
background-color: ${colors.peach};
`;

export const CartItemCounterBtnImg = styled('img')`
margin: auto auto;
`;

export const CartItemCounterQuantity = styled('p')`
margin: auto 0;
`;

export const CartItemInfoWrapper = styled('div')`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const CardItemTitle = styled('p')`
font-weight: ${font.weights.medium};
`;

export const CartItemDesc = styled('p')`
font-size: ${font.sizes.small};
color: ${colors.grayAccent};
`;

export const CartItemBinImg = styled('img')`
${square(20)}
`;

export const CartItemPrice = styled('p')`
font-size: ${font.sizes.small};
`;
