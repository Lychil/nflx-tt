import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import AppContainer from "@/components/app-container/AppContainer";
import Home from "@/pages/Home/Home";

export default function RoutesProvider() {
    const provider = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<AppContainer />}>
                    <Route path="home" element={<Home />} />
                    <Route path="cart" element={<></>} />
                </Route>
            </>
        )
    );

    return <RouterProvider router={provider} />;
}
