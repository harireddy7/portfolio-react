import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';

const App = () => {
	const { colorMode } = useColorMode();
	return (
		<Box
			p={{ base: 0, sm: 5 }}
			background={colorMode === 'dark' ? 'black' : 'gray.50'}
		>
			<Header />
			<About />
		</Box>
	);
};

export default App;
