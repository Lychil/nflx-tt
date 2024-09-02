import { FooterContacts, FooterContactsImg, FooterContactsLink } from "@/components/footer/styles";
import vkImg from "@/images/svg/vk.svg";
import tgImg from "@/images/svg/tg.svg";
import waImg from "@/images/svg/wa.svg";

interface ContactsItemProps {
    id: number,
    svg: string,
    path: string
}

const contactsItems: ContactsItemProps[] = [
    {
        id: 0,
        svg: vkImg,
        path: '/vk'
    },
    {
        id: 1,
        svg: tgImg,
        path: '/tg'
    },
    {
        id: 2,
        svg: waImg,
        path: '/wa'
    }
]

const ContactsItemComponent = ({ path, svg }: { path: string, svg: string }) => {
    return (
        <FooterContactsLink to={path}>
            <FooterContactsImg src={svg} />
        </FooterContactsLink>
    )
}

export default function FooterContactsComponent() {
    return (
        <FooterContacts>
            {contactsItems.map(({ id, path, svg }) => (
                <ContactsItemComponent key={id} path={path} svg={svg} />
            ))}
        </FooterContacts>
    )
}
