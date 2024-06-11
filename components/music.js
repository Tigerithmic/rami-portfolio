import { Box, useColorModeValue, Flex, Image } from '@chakra-ui/react'
import { SiSpotify } from 'react-icons/si'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { css } from '@emotion/react';
import { discordId } from '../lib/constants'
import { useLanyardWS, LanyardData } from 'use-lanyard';

const tiltStyles = css`
  &:hover {
  --tilt: perspective(1500px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transform-style: preserve-3d;
  transform: var(--tilt);
  transition: transform 0.25s var(--bezier-curve);
}


`;

const idle_hoverEffect = css`
  position: relative;
  overflow: hidden;

  span::before,
  span::after,
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: #006400;
  }

  span::before,
  span::after {
    width: 2px;
    height: 0%;
    transition: height 0.4s ease-in-out;
  }

  span::before {
    bottom: 0;
    left: 0;
  }

  span::after {
    top: 0;
    right: 0;
  }

  &::before,
  &::after {
    height: 1px;
    width: 100%;
    transition: transform 0.4s ease-in-out;
  }

  &::before {
    left: 0;
    bottom: 0;
    transform: translateX(-105%);
  }

  &::after {
    right: 0;
    top: 0;
    transform: translateX(105%);
  }

  &:hover {

    span::before,
    span::after {
      height: 100%;
    }

    &::before {
      transform: translateX(0%);
    }

    &::after {
      transform: translateX(0%);
    }
  }
`;

const playing_hoverEffect = css`
  position: relative;
  display: inline-block;
  padding: 0.5rem 0;

::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  height: 2px;
  width: 0%;
  background-color: #006400;
  transition: width 0.5s ease-in-out;
}

::before {
  width: 100%;
`;
// export async function getLanyard(id) {
//   const lanyard = await getLanyard(discordId);
//   return lanyard.data;
// }
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop == 'transition'
  },
})

/*
export const getStaticProps = async () => {
  const lanyard = await getLanyard(discordId)

  return {
    props: { lanyard },
  }
}
*/

const MusicActivity = ({ children, delay = 0 }, props) => {
 const lanyard = useLanyardWS(discordId, {
  LanyardData
 })

 console.log('Lanyard Object' + lanyard);
 
 const status = lanyard?.discord_status ?? 'offline';
 console.log(status);



 if (!lanyard?.listening_to_spotify) {
    return (
      <StyledDiv
        css={idle_hoverEffect}
        initial={{ x: 10, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
      >
        <Box
          display={{ md: 'inline-flex' }}
          margin='2'
          color={useColorModeValue('gray', 'gray')}
          _hover={{
            '& .playing-text': {
              color: useColorModeValue('black','white'),
            },
            '& .spotify-logo': {
              color: '#1DB954',
            }
          }}
        >
          <p>
            <span>
              <Flex alignItems='center'>
                <Box className="playing-text">
                  Nothing playing.&nbsp;
                </Box>
                <Box className="spotify-logo">
                  <SiSpotify />
                </Box>
              </Flex>
            </span>
          </p>
        </Box>
      </StyledDiv>
    )
  }
  return (
    <motion.div
    className="three-dimension-tilt"
    initial={{ rotateX: 0, rotateY: 0 }}
    whileHover={{ rotateX: 15, rotateY: 15 }} // Adjust the tilt values as needed
    transition={{ duration: 0.25 }}
    style={{
      perspective: '1500px',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.25s var(--bezier-curve)',
    }}
  >
    <Box display='flex' alignItems='center' whiteSpace='nowrap' css={tiltStyles}>
      <a
        target='_blank'
        rel='noreferrer'
        href={`https://open.spotify.com/track/${lanyard?.spotify?.track_id}`}
      >
        <Image
          boxSize='60px'
          src={lanyard?.spotify?.album_art_url}
        />
        <Flex>
          Currently playing {lanyard?.spotify?.song}&nbsp; <SiSpotify />
        </Flex>
        <Flex>by {lanyard?.spotify?.artist}</Flex>
      </a>
    </Box>
    </motion.div>
  )
}

export default MusicActivity
