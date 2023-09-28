// chakra-ui
import { Box, Heading, Text, Flex, Image, Input } from '@chakra-ui/react';

// local components
import ImageGrid from './_components/imageGrid';
import MainButton from './_components/mainButton';
import underline from '@/app/_components/brandElements/underline.svg';

// local images
import beekeeper from '@/public/images/beekeeper.jpg';
import cafeOwner from '@/public/images/cafeOwner.jpg';
import artistPainting from '@/public/images/artistPainting.jpg';
import printShopOwner from '@/public/images/printShopOwner.jpg';

export default function Home() {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      pr={{ base: 0, md: '3rem' }}
      p={{ base: '1.5rem', md: 0 }}
      mt={'2rem'}
      mb={'12rem'}
      align={{ base: 'flex-start', md: 'center' }}>
      <Box
        ml={{ base: 0, md: '-7rem' }}
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
        <Image
          m={'0.5rem 0rem'}
          alt='underline'
          src={underline.src}
        />
        <MainButton
          text={'Request a consultation'}
          borderRadius='var(--topLeftBorderRadius)'
        />
      </Box>
    </Flex>
  );
}
