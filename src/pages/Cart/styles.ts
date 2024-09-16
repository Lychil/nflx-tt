import styled from "styled-components";
import { font } from "@/common/styles/styleConstants";

export const CartWrapper = styled('div')`
margin-bottom: 20px;
`;

export const CartTitle = styled('h1')`
margin-bottom: 15px;
font-size: ${font.sizes.sectionTitle};
`;

export const CartContent = styled('div')`
display: flex;
justify-content: space-between;
gap: 10px;
`;