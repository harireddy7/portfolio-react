import { useColorModeValue } from '@chakra-ui/color-mode';
import { Image } from '@chakra-ui/image';
import {
	Box,
	Center,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/layout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { SKILLS } from '../utils/constants';

const Card = ({ label, icon }) => {
	return (
		<Box
			p={5}
			bg='white'
			borderRadius='xl'
			minWidth={{ base: '280px', sm: '200px', md: '280px' }}
			maxWidth={{ base: '300px', md: '350px' }}
			shadow='sm'
			background={useColorModeValue('white', 'gray.900')}
			color={useColorModeValue('black', 'white')}
			transition='all 0.15s'
			_hover={{
				shadow: 'md',
				transform: 'translateY(-5px)',
			}}
		>
			<Stack direction='row' align='center' spacing={3}>
				<Image
					boxSize='50px'
					src={`/images/${icon}`}
					alt={icon}
				/>
				<Text>{label}</Text>
			</Stack>
		</Box>
	);
};

const Skills = () => {
	useDocumentTitle();
	return (
		<Box
			minHeight={{ base: 'calc(100vh - 80px)', sm: 'calc(100vh - 120px)' }}
			background={useColorModeValue('gray.50', 'black')}
		>
			<Center p={5} pt={{ md: 8 }}>
				Here are the technologies i'm worked on and familiar with!
			</Center>
			<Box p={{ base: 3, md: 10 }}>
				<Center>
					<SimpleGrid
						spacing={{ base: '5', md: '8' }}
						columns={{ base: 1, sm:2, lg: 3 }}
					>
						{SKILLS.map(skill => (
							<Card {...skill} key={skill.label} />
						))}
					</SimpleGrid>
				</Center>
			</Box>
		</Box>
	);
};

export default Skills;
