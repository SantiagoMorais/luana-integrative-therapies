import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import { AboutPage } from "./aboutPage";
import { ContactPage } from "./contactPage";
import { Page404 } from "./Page404";
import { EquilibriumPage } from "./equilibriumPage";
import { PostContentPage } from "./postContent";
import { MoonsSecretPage } from "./moonsSecretPage";

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mim" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/equilibrium" element={<EquilibriumPage />} />
            <Route path="/segredos-da-lua" element={<MoonsSecretPage />} />
            <Route path="/equilibrium/:id" element={<PostContentPage />} />
            <Route path="*" element={<Page404 />} />
         </Routes>
      </BrowserRouter>
   );
};
