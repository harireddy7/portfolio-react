import { Box } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/color-mode';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';

const App = () => {
  return (
    <Box p={5} background='gray.50'>
      <Header />
      <About />
    </Box>
  )
}

export default App;
