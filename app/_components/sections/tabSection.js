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
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// local components
import IconLink from '../buttons/iconLink';
import ImageFrame from '@/app/_components/images/imageFrame';

export default function TabSection({
  heading,
  text,
  bgColor = 'var(--lightestOrange, #D9D0CB)',
  color = 'var(--blackAlt, #161616)',
  unselectedColor = 'var(--midGrayAlt, #4F5963)',
  borderColor = 'var(--lightGray, #b2adbe)',
  buttonText,
  buttonLink,
  externalLink = false,
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
          {buttonLink && (
            <Box mt={'1.5rem'}>
              <Link
                href={buttonLink}
                isExternal={externalLink}>
                <IconLink
                  textColor={unselectedColor}
                  hoverTextColor={color}
                  rightIcon={<ExternalLinkIcon />}
                  text={buttonText}
                  borderBottom={'1px solid var(--greenGray, #47888A)'}
                />
              </Link>
            </Box>
          )}
        </Box>
      </Flex>
      {tabs.length > 1 && (
        <Tabs
          overflow={'hidden'}
          variant={'unstyled'}
          minW={'100%'}
          maxW={'100%'}>
          <TabList
            overflow={'auto'}
            borderBottom={`1px solid ${borderColor}`}
            minW={'100%'}>
            {tabs.map((tab, index) => (
              <Tab
                minW={'fit-content'}
                color={unselectedColor}
                _selected={{
                  fontWeight: 500,
                  color: color,
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
                    {tab.list && (
                      <UnorderedList
                        color={tab.list.color}
                        mt={'1rem'}>
                        {tab.list.items.map((item, index) => {
                          const title = item.split('-')[0];
                          const text = item.split('-')[1];

                          return (
                            <ListItem
                              key={index}
                              mb={'0.5rem'}>
                              <span style={{ color: color, fontWeight: 700 }}>
                                {title}
                              </span>
                              - {text}
                            </ListItem>
                          );
                        })}
                      </UnorderedList>
                    )}
                    <Box mt={'1rem'}>
                      <Link
                        href={tab.buttonLink}
                        isExternal={tab.externalLink}>
                        <IconLink
                          textColor={unselectedColor}
                          hoverTextColor={color}
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
                    <ImageFrame
                      image={tab.image}
                      border={`1px solid ${borderColor}`}
                    />
                  </Box>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )}
      {tabs.length === 1 && (
        <Flex
          w={'100%'}
          direction={{ base: 'column', md: 'row' }}
          justify={'space-between'}
          pt={'1.2rem'}>
          <Box
            maxW={{ base: '100%', sm: '30rem' }}
            mb={{ base: '1.5rem', md: 0 }}
            mr={{ base: '1.5rem', lg: 0 }}>
            <Text>{tabs[0].text}</Text>
            {tabs[0].list && (
              <UnorderedList
                color={tabs[0].list.color}
                mt={'1rem'}>
                {tabs[0].list.items.map((item, index) => {
                  const title = item.split('-')[0];
                  const text = item.split('-')[1];

                  return (
                    <ListItem
                      key={index}
                      mb={'0.5rem'}>
                      <span style={{ color: color, fontWeight: 700 }}>
                        {title}
                      </span>
                      - {text}
                    </ListItem>
                  );
                })}
              </UnorderedList>
            )}
            <Box mt={'1rem'}>
              <Link
                href={tabs[0].buttonLink}
                isExternal={tabs[0].externalLink}>
                <IconLink
                  textColor={unselectedColor}
                  hoverTextColor={color}
                  rightIcon={<ExternalLinkIcon />}
                  text={tabs[0].buttonText}
                  link={tabs[0].buttonLink}
                  borderBottom={'1px solid var(--greenGray, #47888A)'}
                />
              </Link>
            </Box>
          </Box>
          <Box
            minW={{ base: '100%', md: '20rem', lg: '25rem' }}
            maxW={{ base: '100%', md: '20rem', lg: '25rem' }}>
            <ImageFrame
              image={tabs[0].image}
              border={`1px solid ${borderColor}`}
            />
          </Box>
        </Flex>
      )}
    </VStack>
  );
}
