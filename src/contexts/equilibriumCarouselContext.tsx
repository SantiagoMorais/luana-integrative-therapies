import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EQUILIBRIUM_TOPICS_QUERY } from "@utils/blogAPI";
import { IEquilibriumTopicsData } from "@utils/equilibriumBlogInterfaces";

interface IEquilibriumCarouselContextType {
   currentTopicId: string;
   setCurrentTopicId: React.Dispatch<React.SetStateAction<string>>;
}

export const EquilibriumCarouselContext =
   createContext<IEquilibriumCarouselContextType>({
      currentTopicId: "",
      setCurrentTopicId: () => {},
   });

interface IEquilibriumCarouselProviderProps {
   children: React.ReactNode;
}

export const EquilibriumCarouselProvider: React.FC<
   IEquilibriumCarouselProviderProps
> = ({ children }) => {
   const [currentTopicId, setCurrentTopicId] = useState<string>("");
   const { data, loading, error } = useQuery<IEquilibriumTopicsData>(
      GET_EQUILIBRIUM_TOPICS_QUERY,
      {
         variables: {
            first: 1,
         },
      }
   );

   useEffect(() => {
      if (!loading && !error && data?.equilibriumTopicosConnection.edges) {
         if (
            !currentTopicId &&
            data.equilibriumTopicosConnection.edges.length > 0
         ) {
            const firstTopicId =
               data.equilibriumTopicosConnection.edges[0]?.node.id;
            setCurrentTopicId(firstTopicId);
         } else {
            return;
         }
      }
   }, [data, loading, error, currentTopicId]);

   return (
      <EquilibriumCarouselContext.Provider
         value={{ currentTopicId, setCurrentTopicId }}
      >
         {children}
      </EquilibriumCarouselContext.Provider>
   );
};
