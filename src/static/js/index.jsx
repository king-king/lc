import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './redux/store';
import Work from './pages/work';
import '../style/base.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Work />
    </Provider>
);
