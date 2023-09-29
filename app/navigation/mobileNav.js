'use client';

// context
import { ContactContext } from '../lib/providers/ContactProvider';

// hooks
import { useRef, useState, useEffect, useContext } from 'react';
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
  Flex,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, ChatIcon } from '@chakra-ui/icons';

// local components
import { routeStyles } from '@/app/lib/styles/routeStyles';
import Logo from '../_components/brandElements/logo';
import IconLink from '../_components/buttons/iconLink';
import { routeList } from './routeList';

export default function MobileNav() {
  const { setOpenContact } = useContext(ContactContext);
  const pathname = usePathname();
  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    setRouteStyle(routeStyles[pathname]);
  }, [pathname]);

  return (
    <>
      <Flex>
        <IconButton
          ref={btnRef}
          icon={<ChatIcon />}
          onClick={() => setOpenContact(true)}
          background={'transparent'}
          color={routeStyle?.logoColor.underscore}
          opacity={0.6}
          _hover={{
            background: 'transparent',
            border: routeStyle?.borderBottom,
          }}
        />
        <IconButton
          ref={btnRef}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          background={'transparent'}
          color={routeStyle?.logoColor.font}
          _hover={{
            background: 'transparent',
            border: routeStyle?.borderBottom,
          }}
        />
      </Flex>

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
              <Link
                onClick={() => {
                  onClose();
                  setOpenContact(true);
                }}>
                <Heading
                  mt={'1rem'}
                  borderTop={
                    routeStyle?.borderBottom ||
                    '1px solid var(--darkPurpleGrayAlt, #432E4C)'
                  }
                  pt={'2rem'}
                  fontWeight={500}>
                  Reach out
                </Heading>
              </Link>
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
