import { HeaderLogo, HeaderPanel, HeaderPanelImg, HeaderPanelItem, HeaderWrapper } from "./styles";
import logoImg from '@/images/svg/logo.svg';
import heartImg from '@/images/svg/heart.svg';
import cartImg from '@/images/svg/cart.svg';
import { ItemsCounter, ItemsCounterText, Logo } from "@/common/styles/styles";

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo>
                <Logo src={logoImg} />

            </HeaderLogo>
            <HeaderPanel>
                <HeaderPanelItem>
                    <ItemsCounter>
                        <ItemsCounterText>0</ItemsCounterText>
                    </ItemsCounter>
                    <HeaderPanelImg src={heartImg} />
                </HeaderPanelItem>
                <HeaderPanelItem>
                    <ItemsCounter>
                        <ItemsCounterText>0</ItemsCounterText>
                    </ItemsCounter>
                    <HeaderPanelImg src={cartImg} />
                </HeaderPanelItem>
            </HeaderPanel>
        </HeaderWrapper>
    )
}
