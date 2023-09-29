'use client';

// chakra-ui
import { Button, Text, Icon } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

export default function IconButton({
  text,
  fontSize = '1rem',
  bgColor = 'transparent',
  textColor = 'var(--blackAlt, #161616)',
  borderColor = 'transparent',
  borderBottom = '1px solid var(--lightGreen, #B6E8BE)',
  hoverBgColor = 'transparent',
  hoverTextColor = 'var(--blackAlt, #161616)',
  hoverBorderColor = 'transparent',
  borderRadius = 0,
  rightIcon = <ArrowDownIcon />,
}) {
  return (
    <Button
      _hover={{
        background: hoverBgColor,
        color: hoverTextColor,
        borderColor: hoverBorderColor,
      }}
      p={0}
      border={`2px solid ${borderColor}`}
      borderRadius={borderRadius}
      background={bgColor}
      color={textColor}
      fontSize={'0.9rem'}
      fontWeight={600}>
      <Text
        fontSize={fontSize}
        mr={'0.2rem'}
        pb={'0.1rem'}
        borderBottom={borderBottom}>
        {text}
      </Text>
      {rightIcon}
    </Button>
  );
}
