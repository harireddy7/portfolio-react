import { extendTheme } from '@chakra-ui/react';

const hideFocus = ({
    baseStyle: {
        _focus: {
            '&:not(:focus-visible)': {
                boxShadow: 'none'
            }
        }
    }
})

export default extendTheme({
	fonts: {
		body: 'Outfit',
		heading: 'Outfit',
	},
	components: {
		Button: hideFocus,
		Link: hideFocus
	}
});