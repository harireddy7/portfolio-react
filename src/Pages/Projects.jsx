import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Text, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
	useDocumentTitle();
	return (
		<Box minHeight={{ base: 'calc(100vh - 80px)', sm: 'calc(100vh - 120px)' }} background={useColorModeValue('gray.50', 'black')} p={5}>
			<Center minHeight='calc(100vh - 250px)'>
        <video autoPlay loop muted playsInline>
          <source src="/images/loading.webm" type="video/webm" />
          <source src="/images/loading.mp4" type="video/mp4" />
        </video>
			</Center>
		</Box>
	);
};

export default About;
