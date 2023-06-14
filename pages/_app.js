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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUser } from '../src/slices/userSlice';
import { useRouter } from 'next/router';
import { fetchProgress } from '../src/slices/tasksSlice';

const App = ({ Component }) => {
const [colorScheme, setColorScheme] = useLocalStorage({
		key: 'mantine-color-scheme',
		defaultValue: 'light',
		getInitialValueInEffect: true,
	});

	const { isUserLoaded } = useSelector((store) => store.userData);
	const toggleColorScheme = value =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
	useHotkeys([['mod+J', () => toggleColorScheme()]]);

	const dispatch = useDispatch();
	const router = useRouter();
	useEffect(() => {
		if (document.cookie.replace('userId=', '') === '') router.push('/login')
		if (!isUserLoaded) dispatch(fetchUser({ userId: document.cookie.replace('userId=', '') }));
		// dispatch(fetchProgress());
    }, []);

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
