import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Button } from '@chakra-ui/button';

const Resume = () => {
	useDocumentTitle();

	const downloadResume = () => {
		window.open('https://github.com/harireddy7/Web-Portfolio/blob/master/assets/Hari-Kotha-Resume.pdf')
	}

	return (
		<Box
			minHeight={{ base: '150px' }}
			background={useColorModeValue('gray.50', 'black')}
			p={5}
		>
			<Center>
				<VStack>
					<Box p={10}>
						<Button onClick={downloadResume} fontWeight='light'>
							Checkout my resume
						</Button>
					</Box>
				</VStack>
			</Center>
		</Box>
	);
};

export default Resume;
