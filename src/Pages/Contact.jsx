import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import { Box, Center, Link, SimpleGrid, Text, VStack } from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { SOCIAL_LINKS } from '../utils/constants';

const Card = ({ username, icon }) => {
	const bgColor = useColorModeValue('gray.100', 'gray.900');
	return (
		<VStack
			background={bgColor}
			borderRadius='2xl'
			p={{ base: 3, sm: 5 }}
			minWidth={{ base: '100px', sm: '120px' }}
			maxWidth='150px'
			maxHeight='200px'
		>
			<Image width='50px' height='40px' src={`/images/${icon}`} alt={icon} loading='lazy' />
			<Text>{username}</Text>
		</VStack>
	);
};

const Contact = () => {
	useDocumentTitle();
	return (
		<Box
			background={useColorModeValue('gray.50', 'black')}
			p={{ base: 5, md: 20 }}
			minHeight={{ md: 'calc(100vh - 120px)' }}
			id="contact"
		>
			<Center>
				<VStack>
					<Text
						display='inline'
						as='span'
						borderBottomColor='gray.500'
						borderBottomWidth='2px'
						mb={10}
					>
						Get in touch
					</Text>
					<Text maxWidth={{ base: '80vw', md: '570px' }} mb='2rem !important'>
						I'm happy to talk about new{' '}
						<Text
							display='inline'
							as='span'
							borderBottomColor='gray.500'
							borderBottomWidth='2px'
							mb={10}
						>
							oppurtunities
						</Text>{' '}
						and working together. If you'd like to get in touch with me, ping me on any of these
						social media platforms
					</Text>
					<SimpleGrid spacing={{ base: '5', md: '8' }} columns={{ base: 2, md: 4 }}>
						{SOCIAL_LINKS.map((social) => (
							<Link
								href={social.link}
								key={social.icon}
								target='_blank'
								ml='1rem !important'
								mb='1rem !important'
							>
								<Card {...social} />
							</Link>
						))}
					</SimpleGrid>
				</VStack>
			</Center>
		</Box>
	);
};

export default Contact;
