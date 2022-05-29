import React from 'react'
import type { NextPage } from 'next'
import { useQuery } from 'urql'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { styled, globalCss, keyframes } from '../../stitches.config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { palette, getNounData, buildSVG } from '../utils'
import Link from 'next/link'

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

  const [tokenId, setTokenId] = useState('0')
  const [inputId, setInputId] = useState('0')

  const [{ data, fetching, error }] = useQuery({
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
    if (data?.seed) {
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

  React.useEffect(() => {
    if (error) {
      toast.error(error.message)
    }

    if (!fetching && !data?.seed) {
      toast.error('Invalid token ID')
    }
  }, [data, error, fetching])

  return (
    <div>
      <Head>
        <title>Lil Noun Traits</title>
        <meta name="description" content="Check noun parts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="tokenId">Token ID:</label>
          <TokenInput placeholder={tokenId} onChange={(e) => setInputId(e.target.value)} />
          <Enter type="submit" value="Enter" />
        </Form>

        <Container>
          {!fetching
            ? data?.seed &&
              myNoun?.parts &&
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
        {data?.seed && (
          <Link href={`https://lilnouns.wtf/lilnoun/${tokenId}`}>
            <a target="_blank" rel="noreferrer">
              https://lilnouns.wtf/lilnoun/{tokenId}
            </a>
          </Link>
        )}
        <ToastContainer />
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
  maxWidth: '750px',
  alignItems: 'center',
  fontSize: '1.1rem',
  overflow: 'hidden',

  a: {
    color: 'white',
    opacity: 0.5,
    width: '100%',
    marginLeft: 22,
  },
})

const TokenInput = styled('input', {
  padding: '6px 8px',
  borderRadius: '4px',
  border: 'none',
  fontSize: '1.1rem',
  marginRight: '10px',
  '&:focus': {
    outline: 'none',
  },
})

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginBottom: 10,
  width: '100%',

  div: {
    display: 'flex',
    width: 150,
    height: 150,
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
  marginBottom: 10,
})

const Form = styled('form', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginLeft: 22,
  marginBottom: 10,

  label: {
    marginRight: '10px',
  },
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
