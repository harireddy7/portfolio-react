import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Center, Link, SimpleGrid, Text } from '@chakra-ui/layout';
import { PAGE_LINKS } from '../utils/constants';

const Footer = () => {
	const bgColor = useColorModeValue('white', 'gray.900');

  const navigateToSection = link => {
    const sectionId = link.substr(1);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }

	return (
		<Box
			p={10}
			background={bgColor}
			boxShadow='sm'
			borderRadius={{ base: 0, sm: 'md' }}
		>
			<Center>
				<SimpleGrid columns={{ base: 1, sm: 4 }} spacing={8}>
					{PAGE_LINKS.map((link) => (
						<Link key={link} mb={{ base: '1rem', sm: 0 }} onClick={() => navigateToSection(link)} textAlign='center'>{link}</Link>
					))}
				</SimpleGrid>
			</Center>
			<Center mt={10}>
				<Text>&copy; 2022 Hari Kotha</Text>
			</Center>
		</Box>
	);
};

export default Footer;
