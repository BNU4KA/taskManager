import '../src/styles/custom.scss';
import '../src/styles/Dropdown.scss';
import { Logout } from 'tabler-icons-react';
import { ReduxWrapper } from '../src/store';
import Login from './login';
import {
  ColorSchemeProvider,
	MantineProvider,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

const App = ({ Component }) => {
const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}>
			<MantineProvider
				theme={{ colorScheme, defaultRadius: 'md' }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Component />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

export default ReduxWrapper.withRedux(App);
