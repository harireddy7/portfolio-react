import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={5} background='white' shadow='md' borderRadius='md'>
        <HStack justifyContent='space-around'>
          <div>&lt;HARI KOTHA /&gt;</div>
          <HStack as='nav' spacing='16' fontWeight='600' letterSpacing='4px' color='#858585'>
            <Text as='a' href='/' color={colorMode === 'light' ? '#000' : '#fff'}>HOME</Text>
            <Text as='a' href='/'>SKILLS</Text>
            <Text as='a' href='/'>PROJECTS</Text>
            <Text as='a' href='/'>RESUME</Text>
            <Text as='a' href='/'>CONTACT</Text>
          </HStack>
          <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
        </HStack>
    </Box>
  )
}

export default Header;
