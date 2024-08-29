import { EquilibriumCarouselProvider } from "@contexts/equilibriumCarouselContext";
import { AppRoutes } from "./pages/appRoutes";
import { MoonsSecretsCarouselProvider } from "@contexts/MoonsSecretscarouselContext";
import { TopicsProvider } from "@contexts/TopicsContext";

export const App = () => {
   return (
      <>
         <TopicsProvider>
            <EquilibriumCarouselProvider>
               <MoonsSecretsCarouselProvider>
                  <AppRoutes />
               </MoonsSecretsCarouselProvider>
            </EquilibriumCarouselProvider>
         </TopicsProvider>
      </>
   );
};
