import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Text, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Resume = () => {
	useDocumentTitle();
	return (
		<Box
			minHeight={{ base: 'calc(100vh - 80px)', sm: 'calc(100vh - 120px)' }}
			background={useColorModeValue('gray.50', 'black')}
			p={5}
		>
			<Center minHeight='calc(100vh - 250px)'>
				<VStack>
					<Text
						display='inline'
						borderBottomColor='gray.500'
						borderBottomWidth='1px'
					>
						Page under development, stay tuned!
					</Text>{' '}
					<Image
						borderRadius='full'
						boxSize={{ base: '90vw', sm: '450px', lg: '550px' }}
						src='/images/under-dev.svg'
						alt='under development'
					/>
				</VStack>
			</Center>
		</Box>
	);
};

export default Resume;
