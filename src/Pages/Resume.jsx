import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Button } from '@chakra-ui/button';

const Resume = () => {
	useDocumentTitle();

	const downloadResume = () => {
		window.open('./harikotha-resume.pdf');
	};

	return (
		<Box w='100%' background={useColorModeValue('gray.50', 'black')} p={0}>
			<Center>
				<VStack>
					<Box mt='40px'>
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
