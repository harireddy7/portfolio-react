import { useColorModeValue } from '@chakra-ui/color-mode';
import {
	AspectRatio,
	Box,
	Center,
	HStack,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Tag } from '@chakra-ui/tag';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { PROJECTS } from '../utils/constants';

const buttonLinks = [
	{
		label: 'Code',
		link: 'github',
	},
	{
		label: 'Live',
		link: 'live',
	},
];

const Card = ({ title, stack, thumbnail, ...links }) => {
	const btnBg = useColorModeValue('gray.100', 'gray.700');
	return (
		<Box
			p={5}
			pt={8}
			bg='white'
			borderRadius='xl'
			minWidth={{ base: 'calc(100vw - 50px)', sm: '400px', md: '280px' }}
			maxWidth={{ base: '300px', sm: '500px', md: '450px' }}
			shadow='sm'
			background={useColorModeValue('white', 'gray.900')}
			color={useColorModeValue('black', 'white')}
		>
			<Stack>
				<Stack mb={2}>
					<Text fontSize='xl'>{title}</Text>
					<HStack flexWrap={{ base: 'nowrap', sm: 'nowrap' }}>
						{stack.map((tech) => (
							<Tag key={tech} size='sm'>
								{tech}
							</Tag>
						))}
					</HStack>
				</Stack>
				<AspectRatio maxW='400px' ratio={4 / 3}>
					<Image
						src={`/images/${thumbnail}`}
						alt={thumbnail}
						objectFit='cover'
						borderRadius='8px'
					/>
				</AspectRatio>
				<HStack
					width='100%'
					justifyContent='flex-end'
					style={{ marginTop: '1rem' }}
				>
					{buttonLinks.map((btnLink) => (
						<Link
							href={links[btnLink.link]}
							key={btnLink.label}
							target='_blank'
							size='sm'
							background={btnBg}
							borderRadius='8px'
							px={5}
							py={1}
						>
							{btnLink.label}
						</Link>
					))}
				</HStack>
			</Stack>
		</Box>
	);
};

const Projects = () => {
	useDocumentTitle();
	return (
		<Box
			minHeight={{ base: 'calc(100vh - 80px)', sm: 'calc(100vh - 120px)' }}
			background={useColorModeValue('gray.50', 'black')}
			my={{ base: 10, md: 0 }}
		>
			<Center p={5} pt={{ md: 8 }}>
				<Text>
					Here are the{' '}
					<Text
						display='inline'
						borderBottomColor='gray.500'
						borderBottomWidth='2px'
						pb='0.1rem'
					>
						projects
					</Text>{' '}
					i worked on so far!
				</Text>
			</Center>
			<Box p={{ base: 3, md: 10 }}>
				<Center>
					<SimpleGrid
						spacing={{ base: '5', md: '8' }}
						columns={{ base: 1, md: 2, lg: 3 }}
					>
						{PROJECTS.map((project) => (
							<Card {...project} key={project.title} />
						))}
					</SimpleGrid>
				</Center>
			</Box>
		</Box>
	);
};

export default Projects;
