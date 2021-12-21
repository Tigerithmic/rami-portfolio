import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { isServer } from '../lib/isServer';

const Social = (props) => {
  if (isServer()) return null;
  const openSocial = () => {
    console.log(props.url);
    window.open(props.url);
  };

  return (
    <IconButton
      mr={3}
      size="md"
      bg={useColorModeValue('0', undefined)}
      onClick={openSocial}
      icon={props.icon}
    />
  );
};

export default Social;
