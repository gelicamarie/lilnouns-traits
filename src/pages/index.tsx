import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { styled, globalCss } from '../../stitches.config'
import { useQuery } from 'urql'
import { useState } from 'react'
import React from 'react'

import { palette, getNounData, buildSVG } from '../utils'

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

const Home: NextPage = () => {
  globalStyles()

  const [tokenId, setTokenId] = useState('592')
  const [{ data, error, fetching }] = useQuery({
    query: /* GraphQL */ `
      query MyNoun($id: ID!) {
        seed(id: $id) {
          background
          body
          accessory
          head
          glasses
        }
      }
    `,
    variables: {
      id: tokenId,
    },
  })

  const myNoun = React.useMemo(() => {
    if (data) {
      const noun = getNounData(data.seed)
      const images = buildSVG(noun.parts, palette, noun.background)
      const builder = (value: string) => `data:image/svg+xml;base64,${btoa(value)}`

      return {
        background: noun.background,
        parts: {
          body: {
            name: noun.parts[0].filename,
            image: builder(images[0]),
          },
          accessory: {
            name: noun.parts[1].filename,
            image: builder(images[1]),
          },
          head: {
            name: noun.parts[2].filename,
            image: builder(images[2]),
          },
          glasses: {
            name: noun.parts[3].filename,
            image: builder(images[3]),
          },
        },
      }
    }
  }, [data])

  return (
    <div>
      <Head>
        <title>Lil Noun Traits</title>
        <meta name="description" content="Check noun parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <TokenInput placeholder="Enter Token ID" value={tokenId} onChange={(e) => setTokenId(e.target.value)} />

        <Container>
          {!fetching &&
            data?.seed &&
            myNoun?.parts &&
            Object.values(myNoun?.parts).map((part) => (
              <Items key={part?.name}>
                <p>{part?.name}</p>
                {part?.image && <Image src={part?.image} alt={part?.name} height={100} width={100} />}
              </Items>
            ))}
        </Container>
      </Main>
    </div>
  )
}

export default Home

const Main = styled('main', {
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  maxWidth: 'fit-content',
  alignItems: 'center',
  pre: {
    fontSize: '1.2rem',
  },
})

const TokenInput = styled('input', {
  fontSize: '1.2rem',
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
})

const Items = styled('div', {
  display: 'flex',
  background: '#161616',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: 150,
  height: 150,
  margin: 10,
  padding: 10,
  textAlign: 'center',
})
