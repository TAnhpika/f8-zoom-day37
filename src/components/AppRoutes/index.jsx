import { HashRouter, Route, Routes } from "react-router";

import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import ModalDemo from "@/pages/ModalDemo";
import ScrollDemo from "@/pages/ScrollDemo";
import PerformanceDemo from "@/pages/PerformanceDemo";
import FocusDemo from "@/pages/FocusDemo";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<ScrollDemo />} />
                    <Route path="/performance-demo" element={<PerformanceDemo />} />
                    <Route path="/focus-demo" element={<FocusDemo />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
