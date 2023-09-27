'use client';

// chakra-ui
import { Box, Heading, Text, HStack, Link, Button } from '@chakra-ui/react';

// local components
import MainButton from '../_components/mainButton';

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
      <MainButton text={'Free consultation'} />
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
