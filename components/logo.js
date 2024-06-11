import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, useTheme } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoContainer = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 20px;
  line-height: 15px;
  padding: 8px;

  &: hover img {
    transform: rotate(13deg);
  }
`

const Logo = () => {
  const theme = useTheme();
  const logoImage = `/images/binoc${useColorModeValue('fix', '-dark')}.png`
  return (
    <Link href='/'>
      <a>
        <LogoContainer>
          <Image src={logoImage} width={20} height={20} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha')}
            fontWeight='bold'
            ml='2'
            fontFamily={theme.fonts.logo}
          >
            rami
            <Text color="pink.500" ml='10'>
            .sh
            </Text>
          </Text>
        </LogoContainer>
      </a>
    </Link>
  )
}

export default Logo
