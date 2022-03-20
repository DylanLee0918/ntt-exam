import './styles/index.css';
import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, MainPage } from './Page';
import store from './store';
import { Provider } from 'react-redux';

const Root: FunctionComponent = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginPage title={'Login Account'} label={'Login'} usernamePlaceholder={'Username'} passwordPlaceholder={'Password'} />} />
                        <Route path="/main" element={<MainPage />} />
                    </Routes>
                </Router>
            </Provider>
        </React.Fragment>
    );
};

export default Root;