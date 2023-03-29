import MainPage from '../src/mainPage/mainPage';
import { ReduxWrapper } from '../src/store';

const App = () => {
	return (
		<MainPage />
	);
}

export default ReduxWrapper.withRedux(App);
