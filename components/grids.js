import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, Link, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const Grid = ({ desc, href, title, thumbnail }) => {
  ;<Box w='100%' align='center'>
    <LinkBox cursor='pointer'>
      <Image
        src={thumbnail}
        alt={title}
        className='grid-item-image'
        placeholder='blur'
        loading='lazy'
      />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={1}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{desc}</Text>
    </LinkBox>
  </Box>
}

export const GridItems = ({ desc, id, title, thumbnail }) => (
  <Box w='100%' align='center'>
    <NextLink href={`/works/${id}`}>
      <LinkBox></LinkBox>
    </NextLink>
  </Box>
)
