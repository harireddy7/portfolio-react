import { Button, IconButton } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const ROUTES = [
	{ to: '/', label: 'HOME' },
	{ to: '/skills', label: 'SKILLS' },
	{ to: '/projects', label: 'PROJECTS' },
	{ to: '/resume', label: 'RESUME' },
	{ to: '/contact', label: 'CONTACT' },
];

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navColor = useColorModeValue('#000', '#fff');

	return (
		<Box
			p={{ base: 2, md: 5 }}
			background={useColorModeValue('white', 'gray.900')}
			shadow='md'
			borderRadius={{ base: 0, sm: 'md' }}
		>
			<HStack justifyContent={{ base: 'space-between', md: 'space-around' }} flexDirection={{ base: 'column', md: 'row' }}>
				<HStack justifyContent={{ base: ' space-between' }} width='100%'>
					<Text>&lt;HARI KOTHA /&gt;</Text>
					<Button onClick={toggleColorMode} display={{ md: 'none' }}>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
				</HStack>

				<HStack justifyContent='space-between' spacing={{ base: 4, md: 12 }} width='100%'>
					<HStack
						as='nav'
						// display={{ base: 'none', md: 'block' }}
						spacing={{ base: 2, md: '6', lg: '10', xl: '16' }}
					>
						{ROUTES.map(({ to, label }) => (
							<Text
								as={NavLink}
								to={to}
								fontSize='small'
								letterSpacing={{ md: '2px', lg: '4px' }}
								style={({ isActive }) => ({
									color: isActive ? navColor : '#858585',
								})}
								key={label}
							>
								{label}
							</Text>
						))}
					</HStack>
					<Button onClick={toggleColorMode} display={{ base: 'none', md: 'block' }}>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
					{/* <Box display={{ md: 'none' }}>
						<Menu>
							<MenuButton as={IconButton} icon={<HamburgerIcon />} />
							<MenuList>
								{ROUTES.map(({ to, label }) => (
									<MenuItem
										as={NavLink}
										to={to}
										style={({ isActive }) => ({
											color: isActive ? navColor : '#858585',
										})}
										key={label}
									>
										{label}
									</MenuItem>
								))}
							</MenuList>
						</Menu>
					</Box> */}
				</HStack>
			</HStack>
		</Box>
	);
};

export default Header;
