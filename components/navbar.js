import Logo from './logo'
import NextLink from 'next/link'

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
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import ToggleThemeButton from './toggle-theme-button'

const darkGradient = `repeating-linear-gradient(-65deg,
  #222,
  #222 40px,
  #2C2C2A 70px,
  #2C2C2A 30px)`

const lightGradient = `repeating-linear-gradient(-65deg,
  #DECFC0,
  #DECFC0 40px,
  #E9DCD0 70px,
  #E9DCD0 30px)`

const LinkItems = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={1.5}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202033' : inactiveColor}
        borderRadius={2}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props) => {
  const { path } = props

  return (
    <Box as='nav' borderRadius={30} w='100%'>
      <Container
        display='flex'
        p={1}
        borderRadius='lg'
        maxW='container.md'
        wrap='wrap'
        align='center'
        justify='space-between'
        bg={useColorModeValue(lightGradient, darkGradient)}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        overflow='visible'
        {...props}
      >
        <Flex align='center' marginRight={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'columnn', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItems href='/about' path={path}>
            bio
          </LinkItems>
          <LinkItems href='/projects' path={path}>
            projects
          </LinkItems>
          <LinkItems href='/learning' path={path}>
            learning
          </LinkItems>
        </Stack>

        <Box>
          <ToggleThemeButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
