import type { AppProps } from 'next/app'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const link = new HttpLink({
  uri: 'https://api.thegraph.com/subgraphs/name/amxx/nft-mainnet',
})
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
