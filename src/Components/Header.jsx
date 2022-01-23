import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box p={5} background={colorMode === 'dark' ? 'gray.900' : 'white'} shadow='md' borderRadius={{ base: 0, sm: 'md' }}>
			<HStack justifyContent={{ base: 'space-between', md: 'space-around' }}>

        <Text>&lt;HARI KOTHA /&gt;</Text>

        <HStack justifyContent='space-between' spacing={{ base: 4, md: 12 }}>
          <HStack
            as='nav'
            display={{ base: 'none', md: 'block' }}
            spacing={{ md: '6', lg: '10', xl: '16' }}
            fontWeight='600'
            letterSpacing={{ md: '2px', lg: '4px' }}
            color='#858585'
          >
            <Text
              as='a'
              fontSize='small'
              href='/'
              color={colorMode === 'light' ? '#000' : '#fff'}
            >
              HOME
            </Text>
            <Text as='a' fontSize='small' href='/'>
              SKILLS
            </Text>
            <Text as='a' fontSize='small' href='/'>
              PROJECTS
            </Text>
            <Text as='a' fontSize='small' href='/'>
              RESUME
            </Text>
            <Text as='a' fontSize='small' href='/'>
              CONTACT
            </Text>
          </HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <Box display={{ md: 'none' }}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} />
              <MenuList>
                <MenuItem>HOME</MenuItem>
                <MenuItem>SKILLS</MenuItem>
                <MenuItem>PROJECTS</MenuItem>
                <MenuItem>RESUME</MenuItem>
                <MenuItem>CONTACT</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
			</HStack>
		</Box>
	);
};

export default Header;
