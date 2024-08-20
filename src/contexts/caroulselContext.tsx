import React, { createContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPICS_QUERY } from "@utils/blogAPI";
import { IAllData } from "@utils/blogInterfaces";

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
    const [currentTopicId, setCurrentTopicId] = useState<string>(() => {
        const localTopic = localStorage.getItem('currentTopicName');
        return localTopic ? JSON.parse(localTopic) : "";
    });

    const {data, loading, error} = useQuery<IAllData>(GET_TOPICS_QUERY);

    useEffect(() => {
        if (!loading && !error && data?.topicos) {
            if (!currentTopicId) {
                const firstTopicId = data.topicos[0]?.id || "";
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