'use client';

// hooks
import { useRef } from 'react';

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
import Logo from '../_components/brandElements/logo';
import { routeList } from './routeList';

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        ref={btnRef}
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
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
