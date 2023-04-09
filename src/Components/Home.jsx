import { Box } from '@chakra-ui/react';
import { AboutLazy, SkillsLazy, ProjectsLazy, ContactLazy, FooterLazy } from '../Pages/index';

const Home = () => {
	return (
		<Box pt='100px'>
			<AboutLazy />
			<SkillsLazy />
			<ProjectsLazy />
			<ContactLazy />
			<FooterLazy />
		</Box>
	);
};

export default Home;
