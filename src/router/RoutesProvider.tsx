import AppContainer from "@/components/app-container/AppContainer";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

export default function RoutesProvider() {
    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AppContainer />}>
                    <Route path="home" element={<></>} />
                    <Route path="cart" element={<></>} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={provider} />;
}
