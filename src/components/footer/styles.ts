import { hoverAccent } from "@/common/styles/mixins";
import { borderRaduis, colors, font, shadows, transitions } from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled('footer')`
padding: 29px;
box-shadow: ${shadows.default};
border-radius: ${borderRaduis.medium} ${borderRaduis.medium} 0 0;
background-color: ${colors.whiteTotal};
`;

export const FooterContent = styled('div')`
display: flex;
justify-content: space-between;
height: 100%;
`;

export const FooterLogo = styled('div')``;

export const FooterNav = styled('nav')``;

export const FooterNavUl = styled('ul')`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;

export const FooterNavLi = styled('li')``;

export const FooterNavLink = styled(Link)`
font-weight: ${font.weights.regular};
transition: ${transitions.fast};
${hoverAccent}
`;


export const FooterGeneral = styled('div')``;

export const FooterGeneralTermUse = styled('div')`
cursor: pointer;
font-weight: ${font.weights.regular};
transition: ${transitions.fast};
${hoverAccent}
margin-bottom: 35px;
`;

export const FooterLanguages = styled('div')`
display: flex;
gap: 17px;
`;

export const FooterLanguagesImg = styled('img')``;

export const FooterLanguagesItem = styled('p')`
cursor: pointer;
font-size: ${font.sizes.small};
font-weight: ${font.weights.medium};
transition: ${transitions.fast};
${hoverAccent}
`;

export const FooterContacts = styled('div')`
display: flex;
margin-bottom: auto;
gap: 18px;
`;

export const FooterContactsLink = styled(Link)`
display: block;
margin: auto 0;
`;

export const FooterContactsImg = styled('img')`
`;