'use client';

// chakra-ui
import { Flex, Heading, Link, Box } from '@chakra-ui/react';

// local components
import Underscore from '@/app/_components/brandElements/underscore.js';

export default function Logo({ color, shouldLink = true, animate = false }) {
  return (
    <>
      {shouldLink ? (
        <Link
          pt={'0.2rem'}
          mr={'1.25rem'}
          href='/'
          _hover={{ textDecoration: 'none' }}
          textDecoration={'none'}>
          <LogoContent color={color} />
        </Link>
      ) : (
        <LogoContent
          color={color}
          animate={animate}
        />
      )}
    </>
  );
}

export const LogoContent = ({ color, animate }) => {
  return (
    <Flex
      maxW={'fit-content'}
      pt={'0.2rem'}
      color={color?.font || 'var(--darkPurpleGrayAlt, #432E4C)'}
      borderRadius={'var(--mainBorderRadius)'}
      transition={'all 0.2s ease-in-out'}
      _hover={{
        outline: '1px solid var(--midPurpleGray, #432E4C)',
      }}
      minW={'fit-content'}
      align={'flex-end'}
      p={'0.3125rem 1.4375rem'}>
      <Box
        pb={'0.3rem'}
        className={animate && 'animateUnderscore'}>
        <Underscore color={color?.underscore || 'var(--orange, #FF7300)'} />
      </Box>
      <Heading
        className={animate && 'animateText'}
        color={color?.font || 'var(--darkPurpleGrayAlt, #432E4C)'}
        fontWeight={600}
        lineHeight={'1.56288rem'}
        letterSpacing={'-0.04688rem'}
        textTransform={'lowercase'}
        fontSize={'1.5625rem'}>
        thoughtco
      </Heading>
    </Flex>
  );
};
