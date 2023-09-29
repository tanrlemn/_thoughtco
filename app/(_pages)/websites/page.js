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

// images
import materialDesk from '@/public/images/materialDesk.jpg';
import manHoldingFlower from '@/public/images/manHoldingFlower.jpg';
import nonbinaryFriends from '@/public/images/nonbinaryFriends.jpg';
import clothingStoreOwner from '@/public/images/clothingStoreOwner.jpg';
import cheerfulMustache from '@/public/images/cheerfulMustache.jpg';

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
      <ImageHero
        subtitle={'_websites'}
        heading={'Building experiences through the lens of your users'}
        text={
          'We offer unique user experiences, quick turnaround, and ongoing maintenance.'
        }
        image={materialDesk}
      />
      <Box
        background={'var(--lightestOrange, #D9D0CB)'}
        color={'var(--blackAlt, #161616)'}
        p={'2rem 2rem 0 2rem'}
        w={'100%'}
        justify={'space-between'}>
        <Box
          borderTop={'1px solid var(--gray, #6a747e)'}
          pt={'1.5rem'}
          mt={'5rem'}>
          <Heading
            fontWeight={500}
            size={'xl'}>
            Website Components
          </Heading>
        </Box>
      </Box>
      <TabSection
        heading={'User Experience'}
        text={
          'User Experience Design is our most requested service, providing tailored and more useful designs.'
        }
        buttonText={'Why user experience matters'}
        buttonLink={'/'}
        tabs={[
          {
            title: 'Advanced decision-making',
            text: 'With broad general knowledge and design research expertise, our designers can create under complex guidelines in a natural design language and solve difficult problems with accuracy.',
            buttonText: 'Get a free consultation',
            buttonLink: '/',
            image: { src: manHoldingFlower.src, alt: 'man holding flower' },
          },
          {
            title: 'Creativity and innovation',
            text: 'We are a team of creative thinkers and problem solvers. We are always looking for new ways to solve problems and create unique experiences.',
            buttonText: 'Get a free consultation',
            buttonLink: '/',
            image: {
              src: nonbinaryFriends.src,
              alt: 'nonbinary friends sitting',
            },
          },
          {
            title: 'Client input',
            text: 'We work closely with our clients to ensure that their needs are met and that they are satisfied with the final product.',
            buttonText: 'Get a free consultation',
            buttonLink: '/',
            image: { src: clothingStoreOwner.src, alt: 'clothing store owner' },
          },
          {
            title: 'Faster service',
            text: 'We offer quick turnaround times on all of our projects, so you can get back to what matters most.',
            buttonText: 'Get a free consultation',
            buttonLink: '/',
            image: {
              src: cheerfulMustache.src,
              alt: 'man with mustache that is happy',
            },
          },
        ]}
      />
    </MainPage>
  );
}
