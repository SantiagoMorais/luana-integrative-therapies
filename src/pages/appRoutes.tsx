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
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/coming-soon" element={<PageCommingSoon/>}/>
                <Route path="*" element={<Page404 />}/>
            </Routes>
        </BrowserRouter>
    )
}