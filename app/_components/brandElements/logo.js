'use client';

// chakra-ui
import { Flex, Heading, Image, Link } from '@chakra-ui/react';

// local components
import underscore from '@/app/_components/brandElements/underscore.svg';

export default function Logo() {
  return (
    <Link
      href='/'
      mr={'1.25rem'}
      color={'var(--darkPurpleGrayAlt, #432E4C)'}
      borderRadius={'var(--mainBorderRadius)'}
      transition={'all 0.2s ease-in-out'}
      _hover={{
        outline: '1px solid var(--midPurpleGray, #432E4C)',
      }}>
      <Flex
        minW={'fit-content'}
        align={'flex-end'}
        p={'0.3125rem 1.4375rem'}>
        <Image
          src={underscore.src}
          alt={'underscore'}
          pb={'0.3rem'}
        />
        <Heading
          fontWeight={600}
          lineHeight={'1.56288rem'}
          letterSpacing={'-0.04688rem'}
          textTransform={'lowercase'}
          fontSize={'1.5625rem'}>
          thoughtco
        </Heading>
      </Flex>
    </Link>
  );
}
