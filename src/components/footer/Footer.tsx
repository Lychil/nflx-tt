import { Logo } from "@/common/styles/styles";
import { FooterContent, FooterLogo, FooterWrapper } from "@/components/footer/styles";
import FooterNavComponent from "@/components/footer/FooterNavComponent";
import FooterGeneralComponent from "./FooterGeneralComponent";

import logoImg from "@/images/svg/logo.svg";
import FooterContactsComponent from "./FooterContactsComponent";

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterLogo>
                    <Logo src={logoImg} />
                </FooterLogo>
                <FooterNavComponent />
                <FooterGeneralComponent />
                <FooterContactsComponent />
            </FooterContent>
        </FooterWrapper>
    )
}
