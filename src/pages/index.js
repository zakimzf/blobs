import * as React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

import SEO from '../components/SEO';
import BlobSettingsSection from '../components/BlobSettingsSection';
import BlobActionBar from '../components/BlobActionBar';
import Logo from '../components/Common/Logo';
import BlobContainer from '../components/BlobContainer';
import NavLinks from '../components/NavLinks';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Blobs - Generate beautiful blob shapes for web and flutter apps"
      description="Customizable blobs as SVG and Flutter Widget. Create random or fixed blobs, loop, animate, clip them with ease"
    />
    <Flex wrap="wrap" flex="1">
      <Flex
        align="center"
        justify="center"
        direction="column"
        my="4"
        w="full"
        display={{ base: 'flex', lg: 'none' }}
      >
        <Logo />
        <Heading fontSize="3xl" variant="main">
          Blobs
        </Heading>
      </Flex>
      <Box
        w={{ base: '100%', lg: 8 / 12 }}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        <Box w={{ base: '100%', lg: 500 }} h={{ lg: 500 }}>
          <BlobContainer />
        </Box>
        <BlobActionBar />
      </Box>

      <Box
        flex="1"
        display="flex"
        alignItems="center"
        w={{ base: '100%', lg: 4 / 12 }}
      >
        <Box w="full">
          <Flex
            align="center"
            justify="center"
            direction="column"
            mb="8"
            display={{ base: 'none', lg: 'flex' }}
          >
            <Logo />
            <Heading fontSize="3xl" variant="main">
              Generate blobs
            </Heading>
          </Flex>
          <BlobSettingsSection />
          <NavLinks />
        </Box>
      </Box>
    </Flex>
  </Layout>
);

export default IndexPage;
