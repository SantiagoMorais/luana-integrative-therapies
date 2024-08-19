import { useQuery } from "@apollo/client"
import { CarouselContext } from "@contexts/caroulselContext"
import { GET_TOPICS_QUERY } from "@utils/blogAPI"
import { ITopic } from "@utils/blogInterfaces"
import { useContext } from "react"
import styled from "styled-components"
import parser from "html-react-parser"
import { fontSize, fontWeight, theme } from "@styles/theme"
import { ErrorPage } from "@components/equilibriumSection/errorPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export const TherapyContent = () => {
    const { currentTopicId, loadingContent } = useContext(CarouselContext)
    const { data, loading, error } = useQuery(GET_TOPICS_QUERY)
    const topic: ITopic = data?.topicos.find((item: ITopic) => item.id === currentTopicId);

    return (
        <Container>
            {
                loadingContent || loading
                    ?
                    <p className="loading">
                        <FontAwesomeIcon className="icon" icon={faSpinner} spin /> Carregando...
                    </p>
                    : error
                        ? <ErrorPage />
                        : <>
                            <h2 className="title">{topic.nome}</h2>
                            <div className="descriptionContent">
                                <img className="topicImage" src={topic.imagem.url} alt={`Imagem do tratamento ${topic.nome}`} />
                                {parser(topic.descricao.html)}
                            </div>
                        </>
            }
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 2rem;
    width: 100%;
    max-width: 144rem;
    display: flex;
    flex-direction: column;

    .loading {
        font-size: ${fontSize.largeSize};
        font-weight: ${fontWeight.medium};
        color: ${theme.tertiaryColor};
        margin: auto;
        min-height: 100%;
        
        .icon {
            margin-right: .5rem;
        }
    }

    .title {
        text-align: center;
        margin: 2rem;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -.5rem;
            left: 0;
            width: 100%;
            height: .2rem;
            background: linear-gradient(to right, transparent 0%, ${theme.tertiaryColor} 50%, transparent 100%); 
        }
    }

    .descriptionContent {
        .topicImage {
            float: left;
            height: 50dvh;
            min-height: 30rem;
            max-height: 50rem;
            object-fit: cover;
            border-radius: .5rem;
            border: .2rem solid ${theme.primaryColor};
            width: 50%;
            max-width: 50rem;
            margin: 0rem 2rem 1rem 0rem;
        }

        p {
            font-size: ${fontSize.basicSize};
            font-weight: ${fontWeight.medium};
            text-indent: 5rem;
            text-align: justify;
            margin-bottom: 1rem;
            color: ${theme.textColor};
            
            &:last-child {
                margin-bottom: 0;
            }
        }
        
        h2, h3, h4 {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.medium};
            position: relative;
            margin: 2rem 0;
            color: ${theme.textColor};
            overflow-wrap: normal;
            display: inline-block;

            &::after {
                content: '';
                position: absolute;
                bottom: -.3rem;
                left: 0;
                width: 120%;
                height: .2rem;
                background: linear-gradient(to right, ${theme.tertiaryColor} 60%, transparent 100%); 
            }
        }

        ul, ol {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding-left: 3rem;
            margin-bottom: 2rem;

            li {
                font-size: ${fontSize.basicSize};
                font-weight: ${fontWeight.medium};
                list-style-position: outside;

                div {
                    text-indent: 0rem;
                    color: ${theme.textColor};

                    p {
                        text-indent: 0rem;
                    }
                }
            }
        }

        ul {
            li {
                list-style-type: circle;
            }
        }
        
        ol {
            li {
                list-style-type: decimal;
            }
        }
    }
`