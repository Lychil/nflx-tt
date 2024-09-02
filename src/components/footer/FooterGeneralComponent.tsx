import { FooterGeneral, FooterGeneralTermUse, FooterLanguages, FooterLanguagesImg, FooterLanguagesItem } from "./styles";
import worldImg from "@/images/svg/world.svg";

export default function FooterGeneralComponent() {
    return (
        <FooterGeneral>
            <FooterGeneralTermUse>Условия пользования</FooterGeneralTermUse>
            <FooterLanguages>
                <FooterLanguagesImg src={worldImg} />
                <FooterLanguagesItem>Рус</FooterLanguagesItem>
                <FooterLanguagesItem>Eng</FooterLanguagesItem>
            </FooterLanguages>
        </FooterGeneral>
    )
}
