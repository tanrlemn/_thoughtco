'use client';

// context
import { LoadingContext } from '@/app/providers/LoadingProvider';

// hooks
import { useContext, useEffect } from 'react';
import { useIsMobile } from '@/app/hooks/useIsMobile';

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
import Logo from '../_components/brandElements/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';

export default function Navbar() {
  const { loading, setLoading } = useContext(LoadingContext);
  const isMobile = useIsMobile();

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  return (
    <Flex
      w={'100%'}
      p={'1rem'}
      borderBottom={'1px solid var(--midPurpleGray, #B397BF)'}>
      <Flex
        w={'100%'}
        justify={{ base: 'space-between', md: 'center' }}>
        <Logo />
        {!loading && isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    </Flex>
  );
}
