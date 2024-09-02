import { Outlet } from "react-router-dom";
import { Container, Content } from "@/common/styles/styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function AppContainer() {
    return (
        <Container>
            <Header />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Container>
    )
}
