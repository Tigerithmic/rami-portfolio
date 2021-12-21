import Logo from './logo';
import NextLink from 'next/link';

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  Text,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';
import ToggleThemeButton from './toggle-theme-button';

const LinkItems = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900');
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202033' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      overflow="visible"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" marginRight={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'columnn', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItems href="/about" path={path}>
            bio
          </LinkItems>
          <LinkItems href="/projects" path={path}>
            projects
          </LinkItems>
          <LinkItems href="/learning" path={path}>
            learning
          </LinkItems>
        </Stack>

        <Box>
          <ToggleThemeButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
