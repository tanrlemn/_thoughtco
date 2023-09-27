'use client';

// chakra-ui
import { Box, Heading, Text, HStack, Link, Button } from '@chakra-ui/react';

// local components
import MainButton from '../_components/mainButton';
import { routeList } from './routeList';

export default function DesktopNav() {
  return (
    <HStack
      w={'100%'}
      justify={'space-between'}>
      <HStack>
        {routeList.map((route) => (
          <NavLink
            key={route.path}
            title={route.title}
            path={route.path}
          />
        ))}
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
