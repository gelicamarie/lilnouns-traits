import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { styled, globalCss, keyframes } from '../../stitches.config'
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
  const [inputId, setInputId] = useState('592')

  const [{ data, fetching }] = useQuery({
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTokenId(inputId)
  }
  return (
    <div>
      <Head>
        <title>Lil Noun Traits</title>
        <meta name="description" content="Check noun parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Container>
          <form onSubmit={handleSubmit}>
            <TokenInput placeholder="Token ID" onChange={(e) => setInputId(e.target.value)} />
            <Enter type="submit" value="Enter" />
          </form>
        </Container>

        <Container>
          {!fetching
            ? myNoun?.parts &&
              Object.values(myNoun?.parts).map((part) => (
                <Items key={part?.name}>
                  <p>{part?.name}</p>
                  {part?.image && <Image src={part?.image} alt={part?.name} height={100} width={100} />}
                </Items>
              ))
            : Array.from({ length: 4 }).map((_, i) => {
                return <Skeleton key={i} />
              })}
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
  fontSize: '1.1rem',
})

const TokenInput = styled('input', {
  padding: '6px 8px',
  borderRadius: '4px',
  border: 'none',
  marginRight: 10,
  fontSize: '1.1rem',

  '&:focus': {
    outline: 'none',
  },
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',

  div: {
    width: 150,
    height: 150,
    margin: 10,
    padding: 10,
  },
})

const Items = styled('div', {
  display: 'flex',
  background: '#303030',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center',
})

const Enter = styled('input', {
  border: 'none',
  padding: '6px 12px',
  borderRadius: '4px',
  cursor: 'pointer',
  background: '#FD8B5B',
  color: '#fff',
  fontSize: '1.1rem',
})

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' },
})

const Skeleton = styled('div', {
  backgroundColor: '#282828',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '#202020',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
})
