import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Heading,
  useColorModeValue,
  Image,
  Button,
  useTheme
} from '@chakra-ui/react'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import MusicActivity from '../components/music'

import {
  GitHub,
  Headphones,
  Inbox,
  Instagram,
  Linkedin,
  Twitter,
  Key,
} from 'react-feather'

import Social from '../components/social.js'

const Page = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        borderRadius='15'
        bg={useColorModeValue('#BEAAD6', '#DD9353')}
        p={2}
        marginBottom={5}
        mt={50}
        mb={20}
        fontSize={17}
        align='center'
        color='white'
        fontFamily={theme.fonts.logo}
      >
        hey! i'm a full-stack engineer, currently on an internship with{' '}
        <b>rbc.</b>
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Box
            display='flex'
            flexShrink={0}
            borderRadius={15}
            flexDir='row'
            mt={{ base: 4, md: 0 }}
            ml={{ md: 0 }}
            width='100%'
            justifyContent='space-between'
            alignItems='center'
          >
            <MusicActivity display='inline-block' />
            <Image
              marginTop='30'
              maxWidth='110px'
              display='inline-block'
              borderRadius='full'
              src='/images/rami-picture.jpeg'
              alt='PFP Image'
            />
          </Box>
          <Heading as='h2' variant='page-title' fontFamily={theme.fonts.logo} mt='35'>
            Rami Ballalou
          </Heading>
          <p fontFamily={theme.fonts.logo}>software eng & product enthusiast.</p>
          <Section delay={0.1}>
            <Heading as='h3' variant='section-title'>
              Work
            </Heading>
            <p fontFamily={theme.fonts.logo}>
              A Software Engineer @ RBC Capital Markets. Just completed a 4 year degree in
              Computer Science with a specialization in Software Design. I enjoy
              an emphasis on optimization when writing code regardless of the
              language. Currently, enjoying my time working with TypeScript,
              Java, and Python. Most recently completed a Software Engineeering
              internship with{' '}
              <Link href='https://rbc.com/'>RBC</Link>.
            </p>
          </Section>
        </Box>
      </Box>

      <Box
        display='flex'
        direction={{ base: 'columnn', md: 'row' }}
        justifyContent={'left'}
        mt='34'
      >
        <Social url={'https://github.com/subrami'} icon={<GitHub></GitHub>} />
        <Social
          url={'https://twitter.com/missmycleancode'}
          icon={<Twitter></Twitter>}
        />
        <Social
          url={'https://www.linkedin.com/in/rami-ballalou/'}
          icon={<Linkedin></Linkedin>}
        />
        <Social
          url={'https://www.instagram.com/ramidiorr/'}
          icon={<Instagram></Instagram>}
        />
        <Social url={'/eth'} icon={<Key></Key>} />
        <Social url={'/lastfm'} icon={<Headphones></Headphones>} />
        <Social url={'mailto:18rb54@queensu.ca'} icon={<Inbox></Inbox>} />
        <Box>
          <NextLink href='/projects'>
            <Button
              leftIcon={<ChevronRightIcon />}
              bg={useColorModeValue('#D5C7BC', '#484a49')}
            >
              projects
            </Button>
          </NextLink>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
