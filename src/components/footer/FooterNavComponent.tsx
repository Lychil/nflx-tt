import { FooterNav, FooterNavLi, FooterNavLink, FooterNavUl } from "./styles";

interface NavItemProps {
    id: number,
    text: string,
    path: string
}

const navItems: NavItemProps[] = [
    {
        id: 0,
        text: 'Избранное',
        path: '/favourites'
    },
    {
        id: 1,
        text: 'Корзина',
        path: '/cart'
    },
    {
        id: 2,
        text: 'Контакты',
        path: '/contacts'
    }
]

const NavUlComponent = ({text, path}: {text: string, path: string}) => {
    return (
        <FooterNavLi>
            <FooterNavLink to={path}>{text}</FooterNavLink>
        </FooterNavLi>
    )
}


export default function FooterNavComponent() {
    return (
        <FooterNav>
            <FooterNavUl>
                {navItems.map(elem => (
                    <NavUlComponent key={elem.id} text={elem.text} path={elem.path} />
                ))}
            </FooterNavUl>
        </FooterNav>
    )
}
