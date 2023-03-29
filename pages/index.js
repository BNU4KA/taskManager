import App from "./_app";
import React from 'react';
import { Provider } from 'react-redux';
// import ReduxWrapper from './slices/index.jsx';

const Index = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

export default Index;