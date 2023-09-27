'use client';

// chakra-ui
import { Box, Heading, Text, HStack, Link, Button } from '@chakra-ui/react';

export default function DesktopNav() {
  return (
    <HStack
      w={'100%'}
      justify={'space-between'}>
      <HStack>
        <NavLink
          title={'Studies'}
          path={'/studies'}
        />
        <NavLink
          title={'Websites'}
          path={'/websites'}
        />
        <NavLink
          title={'Company'}
          path={'/company'}
        />
      </HStack>
      <Button
        _hover={{
          background: 'var(--midPurpleGray, #B397BF)',
        }}
        p={'0.8125rem 1.4375rem'}
        border={'2px solid var(--darkPurpleGray, #584361)'}
        borderRadius={'var(--mainBorderRadius)'}
        background={'var(--lightPurpleGray, #e0c8ea)'}
        color={'var(--blackAlt, #161616)'}
        fontSize={'0.9rem'}
        fontWeight={600}>
        Free consultation
      </Button>
    </HStack>
  );
}

const NavLink = ({ title, path }) => {
  return (
    <Link
      _hover={{
        background: 'var(--lightOrange, #F8AD4F)',
        borderRadius: 'var(--mainBorderRadius)',
      }}
      transition={'all 0.2s ease-in-out'}
      p={'0.5625rem 1.25rem'}
      href={path}>
      {title}
    </Link>
  );
};
