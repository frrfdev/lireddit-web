import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { Provider, createClient } from 'urql';
import { API_URL } from '../constants';

import theme from '../theme';

const client = createClient({
	url: API_URL,
	fetchOptions: { credentials: 'include' },
});

function MyApp({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<ChakraProvider resetCSS theme={theme}>
				<ColorModeProvider
					options={{
						useSystemColorMode: true,
					}}>
					<Component {...pageProps} />
				</ColorModeProvider>
			</ChakraProvider>
		</Provider>
	);
}

export default MyApp;
