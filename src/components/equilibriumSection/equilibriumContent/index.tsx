import { CarouselContext } from "@contexts/caroulselContext"
import { useContext } from "react"
import styled from "styled-components"
import parser from "html-react-parser"
import { fontSize, fontWeight, theme } from "@styles/theme"
import { IEquilibriumTopicEdge } from "@utils/blogInterfaces"
import { EquilibriumListEmpty } from "./equilibriumListEmpty"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

interface ITheraphyContentProps {
    data: IEquilibriumTopicEdge[]
}

export const EquilibriumContent: React.FC<ITheraphyContentProps> = ({ data }) => {
    const { currentTopicId } = useContext(CarouselContext)
    const topic: IEquilibriumTopicEdge | undefined = data?.find((item: IEquilibriumTopicEdge) => item.node.id === currentTopicId);

    return (
        <Container>
            {
                data && data.length > 0
                    ? <>
                        <h2 className="title">{topic?.node.nome}</h2>
                        <div className="descriptionContent">
                            {
                                topic?.node.imagem?.url
                                    ? <img className="topicImage" src={topic?.node.imagem.url} alt={`Imagem do tratamento ${topic?.node.nome}`} />
                                    : <div className="imageNotFound">
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
                                        <h3 className="imageNotFoundTitle">Imagem não encontrada</h3>
                                    </div>
                            }

                            {topic && parser(topic.node.descricao.html)}
                        </div>
                    </>
                    : <EquilibriumListEmpty />
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
    height: 100%;

    .title {
        text-align: center;
        margin: 2rem;
        position: relative;
        font-size: ${fontSize.largeSize};

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
            float: right;
            height: 50dvh;
            min-height: 30rem;
            max-height: 50rem;
            object-fit: cover;
            border-radius: .5rem;
            border: .2rem solid ${theme.primaryColor};
            width: 50%;
            max-width: 50rem;
            margin: 0rem 0rem 1rem 2rem;
        }

        .imageNotFound {
            float: right;
            height: 50dvh;
            min-height: 30rem;
            max-height: 50rem;
            border-radius: .5rem;
            border: .2rem solid ${theme.primaryColor};
            width: 50%;
            max-width: 50rem;
            margin: 0rem 0rem 1rem 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: ${theme.textColor};

            .icon {
                font-size: ${fontSize.basicSize};
            }

            .imageNotFoundTitle {
                font-size: ${fontSize.basicSize};
                font-weight: ${fontWeight.medium};
            }
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

        h2, h3 {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.medium};
            
            strong {
                font-weight: ${fontWeight.bold};
            }
        }

        h4 {
            font-size: ${fontSize.mediumSize};
            font-weight: ${fontWeight.thin};
            
            strong {
                font-weight: ${fontWeight.medium};
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

    @media (max-width: 768px) {
        .descriptionContent {
            .topicImage {
                float: none;
                height: auto;
                min-height: auto;
                max-height: 50rem;
                width: 100%;
                max-width: 100%;
                margin: 0rem 0rem 1rem;
            }
        }
    }
`