import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./homePage";
import { AboutPage } from "./aboutPage";
import { Page404 } from "./Page404";
import { SubSectionsPage } from "./sectionSelectedPage";
import { PostContentPage } from "./postContentPage";
import { ThemeProvider } from "@contexts/themeContext";
import { WhatsAppButton } from "@components/whatsAppButton";

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <ThemeProvider>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/sobre-mim" element={<AboutPage />} />
               <Route path="/equilibrium" element={<SubSectionsPage />} />
               <Route path="/segredos-da-lua" element={<SubSectionsPage />} />
               <Route path="/equilibrium/:id" element={<PostContentPage />} />
               <Route
                  path="/segredos-da-lua/:id"
                  element={<PostContentPage />}
               />
               <Route path="*" element={<Page404 />} />
            </Routes>
            <WhatsAppButton />
         </ThemeProvider>
      </BrowserRouter>
   );
};
