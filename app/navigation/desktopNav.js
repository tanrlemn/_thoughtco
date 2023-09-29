'use client';

// context
import { ContactContext } from '../lib/providers/ContactProvider';

// hooks
import { useContext } from 'react';

// chakra-ui
import { HStack, Link } from '@chakra-ui/react';

// local components
import MainButton from '../_components/buttons/mainButton';
import { routeList } from './routeList';

export default function DesktopNav() {
  const { setOpenContact } = useContext(ContactContext);
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
      <MainButton
        text={'Free consultation'}
        setOpenContact={setOpenContact}
      />
    </HStack>
  );
}

const NavLink = ({ title, path }) => {
  return (
    <Link
      _hover={{
        background: 'var(--lightOrange, #F8AD4F)',
        color: 'var(--darkPurpleGrayAlt, #432E4C)',
        borderRadius: 'var(--mainBorderRadius)',
      }}
      transition={'all 0.2s ease-in-out'}
      p={'0.5625rem 1.25rem'}
      href={path}>
      {title}
    </Link>
  );
};
