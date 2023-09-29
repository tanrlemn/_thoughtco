'use client';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// chakra-ui
import { Box, Heading, Text, Flex, Image, Input } from '@chakra-ui/react';

// local components
import ImageGrid from './_components/images/imageGrid';
import MainButton from './_components/buttons/mainButton';
import Underline from '@/app/_components/brandElements/underline.js';
import Loading from './loading';

// local images
import beekeeper from '@/public/images/beekeeper.jpg';
import cafeOwner from '@/public/images/cafeOwner.jpg';
import artistPainting from '@/public/images/artistPainting.jpg';
import printShopOwner from '@/public/images/printShopOwner.jpg';

export default function Home() {
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <>
      <Loading />
      {!loading && (
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          pr={{ base: 0, md: '3rem' }}
          p={{ base: '1.5rem', md: 0 }}
          mt={'2rem'}
          mb={'12rem'}
          align={{ base: 'flex-start', md: 'center' }}>
          <Box
            ml={{ base: 0, md: '-5rem' }}
            mt={{ base: '1.5rem', md: 0 }}>
            <ImageGrid
              images={[
                { src: artistPainting.src, alt: 'artist painting' },
                { src: printShopOwner.src, alt: 'print shop owner' },
                { src: cafeOwner.src, alt: 'cafe owner' },
                { src: beekeeper.src, alt: 'beekeeper' },
              ]}
            />
          </Box>
          <Box ml={{ base: 0, md: '4rem' }}>
            <Heading
              size={'xl'}
              mb={'1rem'}>
              Creating safe experiences that encourage trust
            </Heading>
            <Input
              placeholder='enter your email...'
              size='lg'
              borderRadius={'var(--mainBorderRadius)'}
              border={'2px solid var(--darkPurpleGray, #584361)'}
              maxW={'17.5625rem'}
            />
            <Underline
              color={' var(--orange, #ff7300)'}
              margin={'0.5rem 0'}
            />
            <MainButton
              text={'Request a consultation'}
              borderRadius='var(--topLeftBorderRadius)'
            />
          </Box>
        </Flex>
      )}
    </>
  );
}
