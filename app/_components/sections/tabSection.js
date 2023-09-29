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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// local components
import IconButton from '../buttons/iconButton';
import ImageFrame from '@/app/_components/images/imageFrame';

export default function TabSection({
  heading,
  text,
  bgColor = 'var(--lightestOrange, #D9D0CB)',
  color = 'var(--blackAlt, #161616)',
  borderColor = 'var(--lightGray, #b2adbe)',
  buttonText,
  buttonLink,
  tabs,
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
            size={'lg'}>
            {heading}
          </Heading>
        </Box>
        <Box maxW={{ base: '100%', sm: '30rem' }}>
          <Text fontSize={'1.25rem'}>{text}</Text>
          <Box mt={'1.5rem'}>
            <Link href={buttonLink}>
              <IconButton
                textColor='var(--midGray, #373C41)'
                rightIcon={<ExternalLinkIcon />}
                text={buttonText}
                borderBottom={'1px solid var(--greenGray, #47888A)'}
              />
            </Link>
          </Box>
        </Box>
      </Flex>
      <Tabs
        variant={'unstyled'}
        minW={'100%'}>
        <TabList
          borderBottom={`1px solid ${borderColor}`}
          minW={'100%'}>
          {tabs.map((tab, index) => (
            <Tab
              color={'var(--midGrayAlt, #4F5963)'}
              _selected={{
                fontWeight: 500,
                color: 'var(--black, #010510)',
                borderBottom: '1px solid var(--darkPurpleGray, #584361)',
              }}
              key={index}>
              {tab.title}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabs.map((tab, index) => (
            <TabPanel
              p={4}
              key={index}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify={'space-between'}
                pt={'1.2rem'}>
                <Box
                  maxW={{ base: '100%', sm: '30rem' }}
                  mb={{ base: '1.5rem', md: 0 }}
                  mr={{ base: '1.5rem', lg: 0 }}>
                  <Text>{tab.text}</Text>
                  <Box mt={'1rem'}>
                    <Link href={tab.buttonLink}>
                      <IconButton
                        textColor='var(--midGray, #373C41)'
                        rightIcon={<ExternalLinkIcon />}
                        text={tab.buttonText}
                        link={tab.buttonLink}
                        borderBottom={'1px solid var(--greenGray, #47888A)'}
                      />
                    </Link>
                  </Box>
                </Box>
                <Box
                  minW={{ base: '100%', md: '20rem', lg: '25rem' }}
                  maxW={{ base: '100%', md: '20rem', lg: '25rem' }}>
                  <ImageFrame image={tab.image} />
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
