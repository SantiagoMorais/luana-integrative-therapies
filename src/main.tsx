import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.tsx'
import { ApolloProvider } from '@apollo/client'
import { client } from '@utils/blogAPI.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
