import { Box, Spacer } from '@chakra-ui/react';
import { AboutLazy, SkillsLazy, ProjectsLazy, ContactLazy, FooterLazy } from '../Pages/index';

const Home = () => {
	return (
		<Box pt='100px'>
			<AboutLazy />
			<Spacer id='skills' height='50px' />
			<SkillsLazy />
			<Spacer id='projects' height='50px' />
			<ProjectsLazy />
			<Spacer id='contact' height='65px' />
			<ContactLazy />
			<FooterLazy />
		</Box>
	);
};

export default Home;