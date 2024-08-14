import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./homePage"
import { AboutPage } from "./aboutPage"
import { ContactPage } from "./contactPage"
import { Page404 } from "./Page404"
import { PageCommingSoon } from "./pageComingSoon"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/sobre-mim" element={<AboutPage />}/>
                <Route path="/contato" element={<ContactPage />}/>
                <Route path="/equilibrium" element={<PageCommingSoon/>}/>
                <Route path="/segredos-da-lua" element={<PageCommingSoon/>}/>
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </BrowserRouter>
    )
}