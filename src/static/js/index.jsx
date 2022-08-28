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
import routers from './config/routers';
import '../style/base.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                {routers.map(({ path, comonent: Com, children }) => {
                    let content;
                    if (children?.length) {
                        content = children.map(item => {
                            const Child = item.comonent;
                            return <Route key={item.path} path={item.path} element={<Child />} />;
                        });
                    }
                    return <Route key={path} path={path} element={<Com />}>{content}</Route>;
                })}
            </Routes>
        </BrowserRouter>
    </Provider>
);
