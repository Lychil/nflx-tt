import { HeaderLogo, HeaderPanel, HeaderPanelImg, HeaderPaneLink, HeaderPanelItem, HeaderWrapper } from "@/components/header/styles";
import { ItemsCounter, ItemsCounterText, Logo } from "@/common/styles/styles";
import logoImg from '@/images/svg/logo.svg';
import heartImg from '@/images/svg/heart.svg';
import cartImg from '@/images/svg/cart.svg';

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderLogo>
                <Logo src={logoImg} />
            </HeaderLogo>
            <HeaderPanel>
                <HeaderPanelItem>
                    <HeaderPaneLink to="/favourites">
                        <HeaderPanelImg src={heartImg} />
                    </HeaderPaneLink>
                    <ItemsCounter>
                        <ItemsCounterText>0</ItemsCounterText>
                    </ItemsCounter>
                </HeaderPanelItem>
                <HeaderPanelItem>
                    <HeaderPaneLink to="/cart">
                        <HeaderPanelImg src={cartImg} />
                    </HeaderPaneLink>
                    <ItemsCounter>
                        <ItemsCounterText>0</ItemsCounterText>
                    </ItemsCounter>
                </HeaderPanelItem>
            </HeaderPanel>
        </HeaderWrapper >
    )
}
