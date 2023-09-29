'use client';

// chakra-ui
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Image,
  Link,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

// local components
import MainButton from '../buttons/mainButton';
import IconButton from '../buttons/iconButton';

export default function ImageHero({ subtitle, heading, text, image }) {
  return (
    <VStack
      align={'flex-start'}
      p={'2rem'}>
      <Flex
        mb={'5rem'}
        w={'100%'}
        justify={'space-between'}
        mt={'6rem'}>
        <Box maxW={'30rem'}>
          <Flex>
            <Heading
              mb={'0.5rem'}
              color={' var(--lightPurpleGray, #E0C8EA)'}
              fontWeight={500}
              letterSpacing={'-0.04688rem'}
              textTransform={'lowercase'}
              fontSize={'1.5625rem'}>
              {subtitle}
            </Heading>
          </Flex>
          <Heading size={'2xl'}>{heading}</Heading>
        </Box>
        <Box
          maxW={'30rem'}
          pt={'1.5rem'}>
          <Text fontSize={'1.25rem'}>{text}</Text>
          <Flex mt={'1.5rem'}>
            <Box mr={'1.5rem'}>
              <MainButton
                text={'Get started'}
                bgColor='var(--lightOrange, #F8AD4F)'
                textColor='var(--blackAlt, #161616)'
                borderColor='var(--redAlt, #F94C4C)'
                hoverBgColor='var(--midPurpleGray, #B397BF)'
                hoverTextColor='var(--blackAlt, #161616)'
                hoverBorderColor='var(--darkPurpleGray, #584361)'
                borderRadius='var(--mainBorderRadius)'
              />
            </Box>
            <IconButton
              textColor='var(--lighterGray, #F1F0EE)'
              hoverTextColor='var(--lightPurpleGray, #E0C8EA)'
              rightIcon={<ArrowDownIcon />}
              text={'Learn more'}
            />
          </Flex>
        </Box>
      </Flex>
      <Image
        w={'100%'}
        alt={`${subtitle} image`}
        src={image.src}
      />
    </VStack>
  );
}
