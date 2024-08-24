import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client"

export const client = new ApolloClient({
    uri: import.meta.env.VITE_HYGRAPH_API_URL,
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: import.meta.env.VITE_HYGRAPH_API_URL,
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`
        }
    })
});

export const GET_EQUILIBRIUM_POSTS_QUERY = gql`
    query GetAllPosts($after: String, $first: Int!) {
        equilibriumPostsConnection(after: $after, first: $first) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    id
                    titulo
                    subtitulo
                    data
                    imagem {
                        url
                    }
                    video 
                    texto {
                        html
                    }
                    autor {
                        nome
                        descricao
                        avatar {
                            url
                        }
                        cro
                    }
                }
            }
        }
    }
`

export const GET_POST_BY_ID_QUERY = gql`
    query GetPostById($id: ID!) {
        equilibriumPost (where: {id: $id}) {
            id
            titulo
            subtitulo
            data
            imagem {
                url
            }
            video 
            texto {
                html
            }
            autor {
                nome
                descricao
                avatar {
                    url
                }
                cro
            }
        }
    }
`

export const GET_EQUILIBRIUM_TOPICS_QUERY = gql`
    query GetAllEquilibriumTopics($after: String, $first: Int!) {
        equilibriumTopicosConnection(after: $after, first: $first) {
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    id
                    nome
                    descricao {
                        html
                    }
                    imagem {
                        url
                    }
                }
            }
        }
    }
`
