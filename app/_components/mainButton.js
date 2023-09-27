'use client';

// chakra-ui
import { Button } from '@chakra-ui/react';

export default function MainButton({
  text,
  bgColor = 'var(--lightPurpleGray, #e0c8ea)',
  textColor = 'var(--blackAlt, #161616)',
  borderColor = 'var(--darkPurpleGray, #584361)',
  hoverBgColor = 'var(--midPurpleGray, #B397BF)',
  hoverTextColor = 'var(--blackAlt, #161616)',
  hoverBorderColor = 'var(--darkPurpleGray, #584361)',
  borderRadius = 'var(--mainBorderRadius)',
}) {
  return (
    <Button
      _hover={{
        background: hoverBgColor,
        color: hoverTextColor,
        borderColor: hoverBorderColor,
      }}
      p={'0.8125rem 1.4375rem'}
      border={`2px solid ${borderColor}`}
      borderRadius={borderRadius}
      background={bgColor}
      color={textColor}
      fontSize={'0.9rem'}
      fontWeight={600}>
      {text}
    </Button>
  );
}
