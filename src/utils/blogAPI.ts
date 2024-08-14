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
              descricao {
                html
              }
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

export interface IPost {
    id: string;
    titulo: string;
    subtitulo?: string;
    data: string;
    categoria: {
        nome: string;
    };
    topico: {
        nome: string,
        descricao: {
            html: string
        };
    };
    imagem: {
        url: string;
    };
    video?: string;
    texto: {
        html: string
    },
    autor: {
        nome: string;
        descricao: string;
        avatar: {
            url: string;
        };
        cro?: number;
    };
}

export interface IPostsData {
    posts: IPost[];
}