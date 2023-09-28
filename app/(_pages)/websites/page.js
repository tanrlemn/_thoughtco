'use client';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// chakra-ui
import { Box, Heading } from '@chakra-ui/react';

// local components
import { routeStyles } from '@/app/lib/styles/routeStyles';
import MainPage from '@/app/_components/mainPage';

export default function WebsitesPage() {
  const pathname = usePathname();
  const { loading, setLoading } = useContext(LoadingContext);

  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  useEffect(() => {
    setLoading(false);
    setRouteStyle(routeStyles[pathname]);
  }, [setLoading, pathname]);
  return (
    <MainPage routeStyle={routeStyle}>
      <Heading color={'#fff'}>websites</Heading>
    </MainPage>
  );
}
