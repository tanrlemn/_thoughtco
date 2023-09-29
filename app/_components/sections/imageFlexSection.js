'use client';

// chakra-ui
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  UnorderedList,
  Image,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// local components
import IconButton from '../buttons/iconButton';
import ImageFrame from '@/app/_components/images/imageFrame';

export default function ImageFlexSection({
  heading,
  text,
  bgColor = 'var(--lightestOrange, #D9D0CB)',
  color = 'var(--blackAlt, #161616)',
  unselectedColor = 'var(--midGrayAlt, #4F5963)',
  borderColor = 'var(--lightGray, #b2adbe)',
  buttonText,
  buttonLink,
  externalLink = false,
  image,
}) {
  return (
    <VStack
      p={{ base: '0 1rem 5rem 1rem', md: '0 2rem 5rem 2rem' }}
      align={'flex-start'}
      color={color}
      background={bgColor}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        borderTop={`1px solid ${borderColor}`}
        pt={'2rem'}
        mb={'5rem'}
        w={'100%'}
        justify={'space-between'}
        mt={'6rem'}>
        <Box maxW={'30rem'}>
          <Heading
            mb={{ base: '0.5rem', md: 0 }}
            fontWeight={500}
            size={'xl'}>
            {heading}
          </Heading>
          <Box
            maxW={{ base: '100%', sm: '30rem' }}
            mb={{ base: '1.5rem', md: 0 }}
            mt={{ base: '1rem' }}
            mr={{ base: '1.5rem', lg: 0 }}>
            <Text>{text}</Text>
            <Box mt={'1rem'}>
              <Link
                href={buttonLink}
                isExternal={externalLink}>
                <IconButton
                  textColor={unselectedColor}
                  hoverTextColor={color}
                  rightIcon={<ExternalLinkIcon />}
                  text={buttonText}
                  link={buttonLink}
                  borderBottom={'1px solid var(--greenGray, #47888A)'}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          overflow={'hidden'}
          maxW={{ base: '100%', sm: '30rem' }}
          maxH={{ base: '36.5rem' }}>
          <Image
            src={image.src}
            alt={image.alt}
          />
        </Box>
      </Flex>
    </VStack>
  );
}
