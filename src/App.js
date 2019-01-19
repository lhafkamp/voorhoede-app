import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Page from './components/Page'
import './styles/all.scss'

const uri = 'http://localhost:4000'
const client = new ApolloClient({ uri })

const App = () => (
  <ApolloProvider client={client}>
    <Page />
  </ApolloProvider>
)

export default App
