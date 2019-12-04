import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
        </BrowserRouter>
    );
};

export default App;
