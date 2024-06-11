import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'

const Dashboard = ({ children, router }) => {
  return (
    <Box as='main' p={8}>
      <Head>
        <meta name='viewport' content='width-device-width, initial scale=1' />
        <title>Rami Ballalou</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='container.md' pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Dashboard
