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

export default function ImageGrid({ images }) {
  const width = {
    base: '15rem',
    md: '20rem',
    lg: '25rem',
  };

  const height = {
    base: '10rem',
    md: '15rem',
    lg: '20rem',
  };

  const borderColors = [
    '4px solid var(--green, #00D020)',
    '4px solid var(--orange, #FF7300)',
    '4px solid var(--yellow, #FFED28)',
    '4px solid var(--purple, #9747FF)',
  ];

  const borderRadiuses = [
    '1.1875rem 1.1875rem 0rem 1.1875rem',
    '1.1875rem 1.1875rem 1.1875rem 0rem',
    '1.1875rem 0rem 1.1875rem 1.1875rem',
    '0rem 1.1875rem 1.1875rem 1.1875rem',
  ];
  return (
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={'0.4rem'}>
      {images.map((image, index) => {
        return (
          <GridItem
            key={index}
            border={borderColors[index]}
            borderRadius={borderRadiuses[index]}
            w={width}
            h={height}
            overflow={'hidden'}>
            <Image
              src={image.src}
              alt={image.alt}
              w={width}
              h={height}
              objectFit={'cover'}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}
