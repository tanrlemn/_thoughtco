// chakra-ui
import { Box, Heading, Text, Flex, Image, Input } from '@chakra-ui/react';

// local components
import ImageGrid from './_components/imageGrid';
import MainButton from './_components/mainButton';
import underline from '@/app/_components/brandElements/underline.svg';

export default function Home() {
  return (
    <Flex
      direction={{ base: 'column-reverse', md: 'row' }}
      pr={{ base: 0, md: '3rem' }}
      p={{ base: '1.5rem', md: 0 }}
      mt={'2rem'}
      align={{ base: 'flex-start', md: 'center' }}>
      <Box
        ml={{ base: 0, md: '-5rem' }}
        mt={{ base: '1.5rem', md: 0 }}>
        <ImageGrid />
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
