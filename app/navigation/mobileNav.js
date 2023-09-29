'use client';

// hooks
import { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// chakra-ui
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  useDisclosure,
  Link,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// local components
import { routeStyles } from '@/app/lib/styles/routeStyles';
import Logo from '../_components/brandElements/logo';
import { routeList } from './routeList';

export default function MobileNav() {
  const pathname = usePathname();
  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    setRouteStyle(routeStyles[pathname]);
  }, [pathname]);

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        onClick={onOpen}
        background={'transparent'}
        color={routeStyle?.logoColor.font}
        _hover={{ background: 'transparent', border: routeStyle?.borderBottom }}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent
          color={routeStyle?.navbarTextColor || 'inherit'}
          background={
            routeStyle?.backgroundColor || 'var(--lightestOrange, #d9d0cb)'
          }
          backdropFilter={'blur(10px) saturate(100%)'}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo
              color={
                routeStyle?.logoColor || 'var(--darkPurpleGrayAlt, #432E4C)'
              }
            />
          </DrawerHeader>

          <DrawerBody>
            <VStack align={'flex-start'}>
              {routeList.map((route) => (
                <Link
                  mb={'1rem'}
                  key={route.path}
                  href={route.path}>
                  <Heading fontWeight={500}>{route.title}</Heading>
                </Link>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              color={
                routeStyle?.logoColor || 'var(--darkPurpleGrayAlt, #432E4C)'
              }
              variant='outline'
              mr={3}
              onClick={onClose}>
              Close menu
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
