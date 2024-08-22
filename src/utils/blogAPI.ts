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

export const GET_POSTS_QUERY = gql`
    {
        posts {
            id
            titulo
            subtitulo
            data
          	categoria {
              nome
            }
          	equilibriumTopico {
            	nome
          	}
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

export const GET_TOPICS_QUERY = gql`
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

export const GET_ALL_DATA_QUERY = gql`
    {
        posts {
            id
            titulo
            subtitulo
            data
          	categoria {
              nome
            }
          	equilibriumTopico {
                id
            	nome
          	}
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
        equilibriumTopicos {
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

`
