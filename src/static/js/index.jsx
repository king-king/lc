import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import 'antd/dist/antd.css';
import store from './redux/store';
import Home from './pages/Home';
import Work from './pages/Work';
import Canvas from './pages/Work/Canvas';
import Api from './pages/Work/Api';
import Manage from './pages/Manage';
import '../style/base.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />}>
                    <Route path='canvas' element={<Canvas />} />
                    <Route path='api' element={<Api />} />
                </Route>
                <Route path='/manage' element={<Manage />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
