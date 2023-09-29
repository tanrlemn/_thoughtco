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
      p={'0 2rem 5rem 2rem'}
      align={'flex-start'}
      color={color}
      background={bgColor}>
      <Flex
        borderTop={`1px solid ${borderColor}`}
        pt={'2rem'}
        mb={'5rem'}
        w={'100%'}
        justify={'space-between'}
        mt={'6rem'}>
        <Box maxW={'30rem'}>
          <Heading
            fontWeight={500}
            size={'lg'}>
            {heading}
          </Heading>
        </Box>
        <Box maxW={'30rem'}>
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
                justify={'space-between'}
                pt={'1.2rem'}>
                <Box maxW={'30rem'}>
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
                <Box maxW={'30rem'}>
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
