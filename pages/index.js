import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import {
  GitHub,
  Headphones,
  Inbox,
  Instagram,
  Linkedin,
  Twitter,
  Key,
} from 'react-feather';

import Social from '../components/social.js';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#CBB8E3', '#DD9353')}
        p={2}
        marginBottom={5}
        mt={50}
        mb={20}
        align="center"
        color="black"
      >
        hey! i'm a full-stack engineer, currently on an internship with{' '}
        <b>rbc.</b>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 0 }}>
            <Image
              maxWidth="110px"
              display="inline-block"
              borderRadius="full"
              src="/images/rami-picture.jpeg"
              alt="PFP Image"
            />
          </Box>
          <Heading as="h2" variant="page-title">
            Rami Ballalou
          </Heading>
          <p>product manager & software eng enthusiast.</p>
        </Box>
      </Box>
      <Box
        display="flex"
        direction={{ base: 'columnn', md: 'row' }}
        justifyContent={'left'}
        mt="35px"
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
      </Box>
    </Container>
  );
};

export default Page;
