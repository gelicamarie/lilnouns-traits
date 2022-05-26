import type { NextPage } from 'next'
import Head from 'next/head'

import { styled, globalCss } from '../stitches.config'
import { useQuery, gql } from '@apollo/client'

const globalStyles = globalCss({
  '*': {
    margin: '0',
    padding: '0',
  },
  html: {
    fontSize: 14,
    fontFamily: 'Avenir, sans-serif',
    letterSpacing: '0.9px',
  },
  body: {
    fontSize: '1rem',
    backgroundColor: '$black100',
    color: '$white100',
    maxWidth: '1400px',
    margin: 'auto',
    padding: 'auto',
  },
})

const query = gql(/* GraphQL */ `
  query MyQuery($id: ID!) {
    noun(id: $id) {
      seed {
        background
        body
        accessory
        head
        glasses
      }
    }
  }
`)

const Home: NextPage = () => {
  globalStyles()

  const res = useQuery(query)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TokenInput></TokenInput>
      </main>
    </div>
  )
}

export default Home

const TokenInput = styled('input', {})