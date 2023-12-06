import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import TicTacToeProvider from "./Providers/TicTacToeProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TicTacToeProvider>
            <App/>
        </TicTacToeProvider>
    </React.StrictMode>
);