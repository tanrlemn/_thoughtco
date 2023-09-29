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
  Text,
  Link,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Box,
} from '@chakra-ui/react';

// local components
import { routeStyles } from '@/app/lib/styles/routeStyles';
import Logo from '../_components/brandElements/logo';

export default function ContactDrawer() {
  const { openContact, setOpenContact } = useContext(ContactContext);

  const pathname = usePathname();
  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  const { onClose, onOpen, isOpen } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    setRouteStyle(routeStyles[pathname]);

    if (openContact) {
      onOpen();
    }
  }, [pathname, openContact, onOpen]);

  return (
    <>
      <Drawer
        isOpen={openContact}
        placement='left'
        onClose={() => {
          setOpenContact(false);
          onClose();
        }}
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
            <Heading size={'lg'}>Send us a message</Heading>
            <Box mt={'2rem'}>
              <FormControl>
                <Box mb={'1.5rem'}>
                  <FormLabel>Your name</FormLabel>
                  <Input
                    type='text'
                    border={
                      routeStyle?.inputBorder ||
                      '1px solid var(--darkPurpleGray, #584361)'
                    }
                    _hover={{
                      border:
                        `1px solid ${routeStyle?.logoColor.underscore}` ||
                        '1px solid var(--darkPurpleGray, #584361)',
                    }}
                  />
                </Box>

                <Box mb={'1.5rem'}>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type='email'
                    border={
                      routeStyle?.inputBorder ||
                      '1px solid var(--darkPurpleGray, #584361)'
                    }
                    _hover={{
                      border:
                        `1px solid ${routeStyle?.logoColor.underscore}` ||
                        '1px solid var(--darkPurpleGray, #584361)',
                    }}
                  />
                  <FormHelperText
                    opacity={0.5}
                    color={
                      routeStyle?.navbarTextColor ||
                      'var(--darkPurpleGray, #584361)'
                    }>
                    We will never share your email.
                  </FormHelperText>
                </Box>

                <Box mb={'1.5rem'}>
                  <FormLabel>How can we help?</FormLabel>
                  <Textarea
                    border={
                      routeStyle?.inputBorder ||
                      '1px solid var(--darkPurpleGray, #584361)'
                    }
                    _hover={{
                      border:
                        `1px solid ${routeStyle?.logoColor.underscore}` ||
                        '1px solid var(--darkPurpleGray, #584361)',
                    }}
                  />
                  <FormHelperText
                    opacity={0.5}
                    color={
                      routeStyle?.navbarTextColor ||
                      'var(--darkPurpleGray, #584361)'
                    }>
                    There&apos;s no wrong answer.
                  </FormHelperText>
                </Box>
              </FormControl>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              color={
                routeStyle?.logoColor || 'var(--darkPurpleGrayAlt, #432E4C)'
              }
              border={
                routeStyle?.inputBorder ||
                '1px solid var(--darkPurpleGray, #584361)'
              }
              _hover={{
                border:
                  `1px solid ${routeStyle?.logoColor.underscore}` ||
                  '1px solid var(--darkPurpleGray, #584361)',
                background:
                  `${routeStyle?.logoColor.backgroundColor}` ||
                  'var(--lightestOrange, #d9d0cb)',
              }}
              variant='outline'
              mr={3}
              onClick={() => {
                setOpenContact(false);
                onClose();
              }}>
              Close menu
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
