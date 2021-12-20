import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('#AE7EEA', '#DD9353')}
        p={2}
        marginBottom={5}
        mt={6}
        align="center"
        color="black"
      >
        hey! i'm a full-stack engineer, currently on an internship with{' '}
        <b>rbc!</b>
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rami Ballalou
          </Heading>
          <p>product manager & enthusiast</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/rami-picture.jpeg"
            alt="PFP Image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
