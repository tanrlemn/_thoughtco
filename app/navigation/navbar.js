'use client';

// hooks
import { useIsMobile } from 'app/hooks/useIsMobile';

// chakra-ui
import {
  Box,
  Heading,
  Text,
  Flex,
  Center,
  Image,
  Link,
} from '@chakra-ui/react';

// local components
import underscore from '@/app/_components/brandElements/underscore.svg';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <Flex
      w={'100%'}
      p={'1rem'}
      borderBottom={'1px solid var(--midPurpleGray, #B397BF)'}>
      <Center w={'100%'}>
        <Link
          mr={'1.25rem'}
          color={'var(--darkPurpleGrayAlt, #432E4C)'}
          borderRadius={'var(--mainBorderRadius)'}
          transition={'all 0.2s ease-in-out'}
          _hover={{
            outline: '1px solid var(--midPurpleGray, #432E4C)',
          }}>
          <Flex
            align={'flex-end'}
            p={'0.3125rem 1.4375rem'}>
            <Image
              src={underscore.src}
              alt={'underscore'}
              pb={'0.3rem'}
            />
            <Heading
              size={'md'}
              fontWeight={600}
              lineHeight={'1.56288rem'}
              letterSpacing={'-0.04688rem'}
              textTransform={'lowercase'}
              fontSize={'1.5625rem'}>
              thoughtco
            </Heading>
          </Flex>
        </Link>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </Center>
    </Flex>
  );
}
