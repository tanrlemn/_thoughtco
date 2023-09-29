'use client';

// chakra-ui
import { Box, AspectRatio, Image } from '@chakra-ui/react';

export default function ImageFrame({
  image,
  border = '1px solid var(--midPurpleGray, #B397BF)',
}) {
  const width = {
    base: '100%',
    md: '20rem',
    lg: '25rem',
  };

  const height = {
    base: '100%',
    md: '20rem',
    lg: '25rem',
  };

  return (
    <Box
      border={border}
      w={'100%'}>
      <Box
        h={'3.2rem'}
        borderBottom={border}></Box>
      <Box
        p={'1.25rem'}
        w={'100%'}>
        <AspectRatio
          ratio={1}
          maxW={width}>
          <Image
            src={image.src}
            alt={image.alt}
            w={width}
            h={height}
            objectFit={'cover'}
          />
        </AspectRatio>
      </Box>
    </Box>
  );
}
