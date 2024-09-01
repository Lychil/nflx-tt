import { Outlet } from "react-router-dom";
import { Container, Content } from "../../styles";

export default function AppContainer() {
    return (
        <Container>
            // header
            <Content>
                <Outlet />
            </Content>
            // footer
        </Container>
    )
}
