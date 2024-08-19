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
          	topico {
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
    query {
        topicos (first: 50) {
            id
            nome
            descricao {
                html
            }
            imagem {
                url
            }
            categoria {
                id
                nome
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
          	topico {
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
        topicos {
            id
            nome
            descricao {
                html
            }
            imagem {
                url
            }
            categoria {
                id
                nome
            }
        }
    }
`