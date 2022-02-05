import { lazy, Suspense } from 'react';
import { Box } from '@chakra-ui/layout';
import { Routes, Route } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/color-mode';
import './App.css';
import Header from './Components/Header';
import { useBreakpoint } from '@chakra-ui/media-query';
import { MOBILE_DEVICES } from './utils/constants';

const AboutLazy = lazy(() => import('./Pages/About'));
const SkillsLazy = lazy(() => import('./Pages/Skills'));
const ProjectsLazy = lazy(() => import('./Pages/Projects'));
const ResumeLazy = lazy(() => import('./Pages/Resume'));
const ContactLazy = lazy(() => import('./Pages/Contact'));

const App = () => {
	const breakpoint = useBreakpoint();
	const isMobile = MOBILE_DEVICES.includes(breakpoint);

	return (
		<Box
			p={{ base: 0, sm: 5 }}
			background={useColorModeValue('gray.50', 'black')}
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
					<>
						<AboutLazy />
						<SkillsLazy />
						<ProjectsLazy />
						<ContactLazy />
					</>
				)}
			</Suspense>
		</Box>
	);
};

export default App;

/*
	1. Refactor theme colors & standarize text and background colors
*/
