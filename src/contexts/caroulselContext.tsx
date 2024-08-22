import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPICS_QUERY } from "@utils/blogAPI";
import { IEquilibriumTopicsData } from "@utils/blogInterfaces";

interface ICarouselContextType {
    currentTopicId: string,
    setCurrentTopicId: React.Dispatch<React.SetStateAction<string>>,
}

export const CarouselContext = createContext<ICarouselContextType>({
    currentTopicId: "",
    setCurrentTopicId: () => { },
});

interface ICaroulselProviderProps {
    children: React.ReactNode,
}

export const CaroulselProvider: React.FC<ICaroulselProviderProps> = ({ children }) => {
    const [currentTopicId, setCurrentTopicId] = useState<string>("");
    const {data, loading, error} = useQuery<IEquilibriumTopicsData>(GET_TOPICS_QUERY);

    useEffect(() => {
        if (!loading && !error && data?.equilibriumTopicosConnection.edges) {
            if (!currentTopicId) {
                const firstTopicId = data.equilibriumTopicosConnection.edges[0]?.node.id;
                setCurrentTopicId(firstTopicId);
            }
        }
    }, [data, loading, error, currentTopicId])

    useEffect(() => {
        window.localStorage.setItem('currentTopicName', JSON.stringify(currentTopicId))
    }, [currentTopicId])

    return (
        <CarouselContext.Provider value={{ currentTopicId, setCurrentTopicId }}>
            {children}
        </CarouselContext.Provider>
    )
}