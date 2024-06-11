import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/dashboard.js'
import theme from '../lib/theme-config.js'
import Fonts from '../components/fonts'
import useSound from 'use-sound'
import { useEffect, useRef } from 'react'
import { isServer } from '../lib/isServer'

const App = ({ Component, pageProps, router }) => {
  const [playSwitchSound] = useSound('switch.mp3')

  useEffect(() => {
    if (isServer()) return null
    playSwitchSound()
  }, [router.pathname])

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
