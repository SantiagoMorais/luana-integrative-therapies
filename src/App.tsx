import { EquilibriumCarouselProvider } from "@contexts/equilibriumCarouselContext";
import { AppRoutes } from "./pages/appRoutes";
import { MoonsSecretsCarouselProvider } from "@contexts/MoonsSecretscarouselContext";
import { TopicsProvider } from "@contexts/TopicsContext";
import { SectionSelectedProvider } from "@contexts/sectionSelectedContext";

export const App = () => {
   return (
      <>
         <TopicsProvider>
            <EquilibriumCarouselProvider>
               <MoonsSecretsCarouselProvider>
                  <SectionSelectedProvider>
                     <AppRoutes />
                  </SectionSelectedProvider>
               </MoonsSecretsCarouselProvider>
            </EquilibriumCarouselProvider>
         </TopicsProvider>
      </>
   );
};
