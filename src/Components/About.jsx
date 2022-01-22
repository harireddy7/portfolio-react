import { Box, Center, Text, VStack } from '@chakra-ui/layout';
import React from 'react';

const About = () => {
  return (
      <Box minHeight='calc(100vh - 120px)' background='gray.50' p={5}>
          <Center minHeight='calc(100vh - 250px)'>
              <VStack>
                <Text fontSize='7xl' fontWeight='600'>Hi, I'm HARI  🙋</Text>
                <Text fontSize='4xl'>a passionate <Text display='inline' borderBottomColor='gray.500' borderBottomWidth='5px'>Web Developer</Text> from India.</Text>
                <Text fontSize='4xl'>I specialize in building responsive UI with modern <Text display='inline' borderBottomColor='gray.500' borderBottomWidth='5px'>JavaScript</Text> tools</Text>
              </VStack>

          </Center>
      </Box>
  );
};

export default About;
