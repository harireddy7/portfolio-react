import { lazy, Suspense } from 'react';
import { Box, Spacer } from '@chakra-ui/layout';
import { Routes, Route } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';
import Header from './Components/Header';
import { useBreakpoint } from '@chakra-ui/media-query';
import { MOBILE_DEVICES } from './utils/constants';

const AboutLazy = lazy(() => import('./Pages/About'));
const SkillsLazy = lazy(() => import('./Pages/Skills'));
const ProjectsLazy = lazy(() => import('./Pages/Projects'));
const ContactLazy = lazy(() => import('./Pages/Contact'));
const FooterLazy = lazy(() => import('./Components/Footer'));

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

const App = () => {
	const breakpoint = useBreakpoint();
	const isMobile = MOBILE_DEVICES.includes(breakpoint);
	if (isMobile) {
		document.title = 'Home | Hari Kotha'
	}

	return (
		<Box
			p={{ base: 0, md: 5 }}
			background={useColorModeValue('gray.50', 'black')}
			id='about'
		>
			<Header />
			<Suspense fallback={<div>Loading...</div>}>
				{!isMobile ? (
					<Routes>
						<Route path='/' element={<AboutLazy />} />
						<Route path='/skills' element={<SkillsLazy />} />
						<Route path='/projects' element={<ProjectsLazy />} />
						<Route path='/contact' element={<ContactLazy />} />
						<Route path='*' element={<div>NotFound</div>} />
					</Routes>
				) : (
					<Routes>
						<Route path='*' element={<Home />} />
					</Routes>
				)}
			</Suspense>
		</Box>
	);
};

export default App;
