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
  const dimension = {
    base: '10rem',
    md: '15rem',
    lg: '20rem',
  };
  return (
    <Grid
      templateColumns='repeat(2, 1fr)'
      gap={'0.8rem'}>
      <GridItem
        border={'4px solid var(--green, #00D020)'}
        borderRadius={'1.1875rem 1.1875rem 0rem 1.1875rem'}
        w={dimension}
        h={dimension}
        bg='blue.500'></GridItem>
      <GridItem
        border={'4px solid var(--orange, #FF7300)'}
        borderRadius={'1.1875rem 1.1875rem 1.1875rem 0rem'}
        w={dimension}
        h={dimension}
        bg='blue.500'></GridItem>
      <GridItem
        border={'4px solid var(--yellow, #FFED28)'}
        borderRadius={'1.1875rem 0rem 1.1875rem 1.1875rem'}
        w={dimension}
        h={dimension}
        bg='blue.500'></GridItem>
      <GridItem
        border={'4px solid var(--purple, #9747FF)'}
        borderRadius={'0rem 1.1875rem 1.1875rem 1.1875rem'}
        w={dimension}
        h={dimension}
        bg='blue.500'></GridItem>
    </Grid>
  );
}
