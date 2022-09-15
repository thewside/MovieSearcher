import { App } from './App.jsx';
import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getURLParams } from './components/utils/getUrlParams.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path={`/`} element={<App/>}></Route>
            {/* <Route path={getURLParams().url} element={<App/>}></Route> */}
        </Routes>
    </BrowserRouter>
);
