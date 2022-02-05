import { Button } from '@chakra-ui/button';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navMenuColor = useColorModeValue('#000', '#fff');

	return (
		<Box
			p={5}
			background={useColorModeValue('white', 'gray.900')}
			shadow='md'
			borderRadius={{ base: 0, sm: 'md' }}
		>
			<HStack justifyContent={{ base: 'space-between', md: 'space-around' }}>
				<Text>&lt;HARI KOTHA /&gt;</Text>

				<HStack justifyContent='space-between' spacing={{ base: 4, md: 12 }}>
					<HStack
						as='nav'
						display={{ base: 'none', md: 'block' }}
						spacing={{ md: '6', lg: '10', xl: '16' }}
					>
						{ROUTES.map(({ to, label }) => (
							<Text
								as={NavLink}
								to={to}
								fontSize='small'
								letterSpacing={{ md: '2px', lg: '4px' }}
								style={({ isActive }) => ({
									color: isActive ? navMenuColor : '#858585',
								})}
								key={label}
							>
								{label}
							</Text>
						))}
					</HStack>
					<Button onClick={toggleColorMode}>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
				</HStack>
			</HStack>
		</Box>
	);
};

export default Header;
