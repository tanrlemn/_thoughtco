'use client';

// context
import { LoadingContext } from '@/app/lib/providers/LoadingProvider';

// hooks
import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// chakra-ui
import { Box, Heading } from '@chakra-ui/react';

// local components
import { routeStyles } from '@/app/lib/styles/routeStyles';
import MainPage from '@/app/_components/mainPage';
import ImageHero from '@/app/_components/sections/imageHero';
import TabSection from '@/app/_components/sections/tabSection';
import ImageFlexSection from '@/app/_components/sections/imageFlexSection';
import Loading from '@/app/loading';

// images
import materialDesk from '@/public/images/materialDesk.jpg';
import manHoldingFlower from '@/public/images/manHoldingFlower.jpg';
import nonbinaryFriends from '@/public/images/nonbinaryFriends.jpg';
import clothingStoreOwner from '@/public/images/clothingStoreOwner.jpg';
import cheerfulMustache from '@/public/images/cheerfulMustache.jpg';
import elegantBloom from '@/public/images/elegantBloom.jpg';
import sketchbook from '@/public/images/sketchbook.jpg';
import workstation3d from '@/public/images/workstation3d.jpg';
import rainbowPeople from '@/public/images/rainbowPeople.jpg';
import tilePile from '@/public/images/tilePile.jpg';
import handHoldingFlowers from '@/public/images/handHoldingFlowers.jpg';

export default function WebsitesPage() {
  const pathname = usePathname();
  const { loading, setLoading } = useContext(LoadingContext);

  const [routeStyle, setRouteStyle] = useState(routeStyles[pathname]);

  useEffect(() => {
    setLoading(false);

    setRouteStyle(routeStyles[pathname]);
  }, [setLoading, pathname]);

  return (
    <MainPage routeStyle={routeStyle}>
      <Loading routeStyle={routeStyle} />
      {!loading && (
        <>
          <ImageHero
            subtitle={'_websites'}
            subtitleColor='var(--lightPurpleGray, #E0C8EA)'
            color='#fff'
            heading={'Building experiences through the lens of your users'}
            text={
              'We offer unique user experiences, quick turnaround, and ongoing maintenance.'
            }
            image={materialDesk}
          />
          <Box
            background={'var(--lightestOrange, #D9D0CB)'}
            color={'var(--blackAlt, #161616)'}
            p={{ base: '1rem 1rem 0 1rem', md: '2rem 2rem 0 2rem' }}
            w={'100%'}
            justify={'space-between'}>
            <Box
              borderTop={'1px solid var(--gray, #6a747e)'}
              pt={'1.5rem'}
              mt={'5rem'}>
              <Heading
                fontWeight={500}
                size={'xl'}>
                Website Components
              </Heading>
            </Box>
          </Box>
          <TabSection
            heading={'User Experience'}
            text={
              'User Experience Design is our most requested service, providing tailored and more useful designs.'
            }
            buttonText={'Why user experience matters'}
            buttonLink={'/'}
            tabs={[
              {
                title: 'Advanced decision-making',
                text: 'With broad general knowledge and design research expertise, our designers can create under complex guidelines in a natural design language and solve difficult problems with accuracy.',
                buttonText: 'Get a free consultation',
                buttonLink: '/',
                image: { src: manHoldingFlower.src, alt: 'man holding flower' },
              },
              {
                title: 'Creativity and innovation',
                text: 'We are a team of creative thinkers and problem solvers. We are always looking for new ways to solve problems and create unique experiences.',
                buttonText: 'Get a free consultation',
                buttonLink: '/',
                image: {
                  src: nonbinaryFriends.src,
                  alt: 'nonbinary friends sitting',
                },
              },
              {
                title: 'Client input',
                text: 'We work closely with our clients to ensure that their needs are met and that they are satisfied with the final product.',
                buttonText: 'Get a free consultation',
                buttonLink: '/',
                image: {
                  src: clothingStoreOwner.src,
                  alt: 'clothing store owner',
                },
              },
              {
                title: 'Faster service',
                text: 'We offer quick turnaround times on all of our projects, so you can get back to what matters most.',
                buttonText: 'Get a free consultation',
                buttonLink: '/',
                image: {
                  src: cheerfulMustache.src,
                  alt: 'man with mustache that is happy',
                },
              },
            ]}
          />
          <TabSection
            heading={'Coding Standards'}
            text={
              'We adhere to widely accepted coding standards to create websites that can be interpreted by any seasoned developer.'
            }
            buttonText={'What are coding standards'}
            buttonLink={'/'}
            externalLink={false}
            bgColor={'var(--darkestPurple, #210735)'}
            color={'var(--lightGreen, #B6E8BE)'}
            borderColor={'var(--darkPurpleGray, #584361)'}
            unselectedColor={'var(--lightGray, #B2ADBE)'}
            tabs={[
              {
                title: 'Modern Frameworks',
                text: 'We use a combination of modern frameworks, including Next.js, to ensure all the building blocks of our web applications are where they should be. Such as:',
                list: {
                  color: 'var(--midGreen, #71DC81)',
                  items: [
                    'User Interface - how users will consume and interact with your website.',
                    'Routing - how users navigate between different parts of your website.',
                    'Data Fetching - where your data lives and how to get it.',
                    'Rendering - when and where you render static or dynamic content.',
                    'Integrations - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.',
                    'Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).',
                    'Performance - how to optimize your application for end-users.',
                  ],
                },
                buttonText: 'What is Next.js',
                buttonLink: 'https://nextjs.org/docs',
                externalLink: true,
                image: {
                  src: elegantBloom.src,
                  alt: 'womain with flower headdress',
                },
              },
              {
                title: 'Reusablity',
                text: 'We use reusable components to ensure that our code is easy to maintain and update. This also allows us to create new features quickly without having to rewrite the entire application.',
                buttonText: 'What are reusable components',
                buttonLink: `https://thefiend.medium.com/how-to-create-a-reusable-component-in-reactjs-9a28c15be06a`,
                externalLink: true,
                image: {
                  src: sketchbook.src,
                  alt: 'sketchbook with drawings',
                },
              },
              {
                title: 'Integrations',
                text: 'We integrate with third-party services based on project requirements, such as Sanity, Stripe, Netlify, Supabase, and more to ensure that your website is secure and up-to-date.',
                buttonText: 'What are website integrations',
                buttonLink: `https://www.activecampaign.com/glossary/website-integration#:~:text=A%20website%20integration%20is%20when,connect%20data%20from%20different%20sources`,
                externalLink: true,
                image: {
                  src: workstation3d.src,
                  alt: '3d workstation',
                },
              },
              {
                title: 'Version Control',
                text: 'We use Git and GitHub to manage our codebase, allowing us to collaborate with other developers and track changes over time.',
                buttonText: 'What is Git',
                buttonLink: `https://www.simplilearn.com/tutorials/git-tutorial/what-is-git#:~:text=Git%20is%20a%20DevOps%20tool,together%20on%20non%2Dlinear%20development`,
                externalLink: true,
                image: {
                  src: rainbowPeople.src,
                  alt: 'rainbow-colored people',
                },
              },
            ]}
          />
          <TabSection
            heading={'Ongoing Maintenance'}
            text={
              'We are always available to maintain, analyze, and optimize your website when your project is complete.'
            }
            bgColor={'var(--midGreen, #71DC81)'}
            borderColor='var(--midGreenGray, #60B56D)'
            tabs={[
              {
                text: 'We offer a variety of maintenance plans to ensure your website continues to deliver a great user experience for your customers.',

                buttonText: 'Ask us about maintenance',
                buttonLink: '/',
                image: {
                  src: tilePile.src,
                  alt: 'pile of tiles',
                },
              },
            ]}
          />
          <ImageFlexSection
            heading={'Ensuring your customers steer the ship'}
            text={
              'We use the data you provide, our research, and feedback collected during the process to provide documentation of what your customers are asking for.'
            }
            buttonText={'Get a free consultation'}
            buttonLink={'/'}
            image={{
              src: handHoldingFlowers.src,
              alt: 'hand holding flowers',
            }}
          />
        </>
      )}
    </MainPage>
  );
}
