import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppState from "./Context/AppState";
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppState>
        <BrowserRouter>
            <Toaster/>
            <App/>
        </BrowserRouter>
    </AppState>
);
