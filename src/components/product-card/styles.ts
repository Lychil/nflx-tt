import styled from "styled-components";
import { borderRaduis, colors, font, shadows } from "@/common/styles/styleConstants";
import { square } from "@/common/styles/styleHelpers";

export const ProductCardWrapper = styled('div')`
padding: 15px;
width: 350px;
height: 400px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: ${colors.whiteTotal};
box-shadow: ${shadows.default};
border-radius: ${borderRaduis.medium};
`;

export const ProductCardImg = styled('img')`
margin: 0 auto;
width: 220px;
height: 240px;
`;

export const ProductCardInfo = styled('div')``;

export const ProductCardBlock = styled('div')`
display: flex;
justify-content: space-between;
`;

export const ProductCardTitle = styled('p')``;

export const ProductCardNewPrice = styled('div')`
position: relative;
color: ${colors.accent};
`;

export const ProductCardOldPrice = styled('div')`
position: absolute;
bottom: -50%;
left: 50%;
transform: translateX(-50%);
font-size: ${font.sizes.extraSmall};
color: ${colors.accent};
text-decoration: line-through;
`;

export const ProductCardButton = styled('button')`
margin: auto 0;
`;

export const ProductCardRating = styled('div')`
display: flex;
gap: 10px;
`;

export const ProductCardRatingImg = styled('img')`
${square(25)}
`;

export const ProductCardRatingCount = styled('p')`
margin: auto 0;
color: ${colors.grayDark};
`;