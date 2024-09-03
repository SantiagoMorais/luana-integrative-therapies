import { AppRoutes } from "./pages/appRoutes";
import { TopicsProvider } from "@contexts/TopicsContext";
import { SectionSelectedProvider } from "@contexts/sectionSelectedContext";
import { PostOrTopicProvider } from "@contexts/postOrTopicContext";

export const App = () => {
   return (
      <>
         <TopicsProvider>
                  <SectionSelectedProvider>
                     <PostOrTopicProvider>
                        <AppRoutes />
                     </PostOrTopicProvider>
                  </SectionSelectedProvider>
         </TopicsProvider>
      </>
   );
};
