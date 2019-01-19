import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import './styles/all.scss'

const uri = 'http://localhost:4000'
const client = new ApolloClient({ uri })

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ApolloProvider>
)

export default App
