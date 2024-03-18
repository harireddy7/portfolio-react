import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useBreakpoint } from '@chakra-ui/media-query';
import { MOBILE_DEVICES } from './utils/constants';
import { AboutLazy, ProjectsLazy, SkillsLazy, ContactLazy } from './Pages/index';
import Header from './Components/Header';
import Home from './Components/Home';

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
			id='root-app'
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
