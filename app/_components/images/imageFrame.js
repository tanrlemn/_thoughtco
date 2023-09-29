'use client';

// chakra-ui
import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  Image,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export default function ImageFrame({
  image,
  border = '1px solid var(--midPurpleGray, #B397BF)',
}) {
  const width = {
    base: '15rem',
    md: '20rem',
    lg: '25rem',
  };

  const height = {
    base: '15rem',
    md: '20rem',
    lg: '25rem',
  };

  return (
    <Box border={border}>
      <Box
        h={'3.2rem'}
        borderBottom={border}></Box>
      <Box p={'1.25rem'}>
        <Image
          src={image.src}
          alt={image.alt}
          w={width}
          h={height}
          objectFit={'cover'}
        />
      </Box>
    </Box>
  );
}
