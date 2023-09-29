'use client';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// chakra-ui
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

// local components
import { routeStyles } from '@/app/lib/styles/routeStyles';
import MainPage from '@/app/_components/mainPage';
import ImageHero from '@/app/_components/sections/imageHero';
import TabSection from '@/app/_components/sections/tabSection';
import Loading from '@/app/loading';

// images
import tanner from '@/public/images/tanner.jpg';

export default function CompanyPage() {
  const pathname = usePathname();
  const { loading, setLoading } = useContext(LoadingContext);

  const [extraLoading, setExtraLoading] = useState(true);

  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  useEffect(() => {
    setLoading(false);
    const timeout = Math.random() * 1000;

    setTimeout(() => {
      setExtraLoading(false);
    }, timeout);
    setRouteStyle(routeStyles[pathname]);
  }, [setLoading, pathname]);

  return (
    <MainPage routeStyle={routeStyle}>
      <Loading routeStyle={routeStyle} />

      <ImageHero
        subtitle={'_company'}
        color='var(--darkerOrange, #9E3A18)'
        heading={'Trust through design and development'}
        text={
          'Thought Co is a web design and development company with a mission to build unique, resonating experiences for our clients and their users.'
        }
        buttons={false}
        image={tanner}
      />
    </MainPage>
  );
}
