'use client';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext, useEffect, useState } from 'react';
import { useIsMobile } from '@/app/lib/hooks/useIsMobile';
import { usePathname } from 'next/navigation';

// chakra-ui
import { Flex } from '@chakra-ui/react';

// local components
import Logo from '../_components/brandElements/logo';
import DesktopNav from './desktopNav';
import MobileNav from './mobileNav';
import { routeStyles } from '../lib/styles/routeStyles';

export default function Navbar() {
  const pathname = usePathname();
  const { loading, setLoading } = useContext(LoadingContext);
  const isMobile = useIsMobile();

  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  useEffect(() => {
    setLoading(false);
    setRouteStyle(routeStyles[pathname]);
  }, [setLoading, isMobile, pathname]);

  return (
    <Flex
      background={
        routeStyle?.navbarColor || 'var(--lightestOrange90, #f4efecd7)'
      }
      color={routeStyle?.navbarTextColor || 'inherit'}
      backdropFilter={'blur(10px) saturate(100%)'}
      position={'sticky'}
      top={'0'}
      w={'100%'}
      p={'1rem'}
      borderBottom={
        routeStyle?.borderBottom || '1px solid var(--midPurpleGray, #B397BF)'
      }>
      <Flex
        w={'100%'}
        justify={{ base: 'space-between', md: 'center' }}>
        <Logo
          color={routeStyle?.logoColor || 'var(--darkPurpleGrayAlt, #432E4C)'}
        />
        {!loading && isMobile ? <MobileNav /> : <DesktopNav />}
      </Flex>
    </Flex>
  );
}
