import { AppRoutes } from "./pages/appRoutes";
import { TopicsProvider } from "@contexts/TopicsContext";
import { SectionSelectedProvider } from "@contexts/sectionSelectedContext";
import { PostOrTopicProvider } from "@contexts/postOrTopicContext";
import { TopicsCarouselProvider } from "@contexts/topicsCarouselContext";
import { WhatsAppButton } from "@components/whatsAppButton";

export const App = () => {
   return (
      <>
         <TopicsProvider>
            <SectionSelectedProvider>
               <PostOrTopicProvider>
                  <TopicsCarouselProvider>
                     <AppRoutes />
                     <WhatsAppButton />
                  </TopicsCarouselProvider>
               </PostOrTopicProvider>
            </SectionSelectedProvider>
         </TopicsProvider>
      </>
   );
};
