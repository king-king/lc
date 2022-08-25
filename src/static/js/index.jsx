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
import Behavior from './pages/Work/Behavior';
import PageList from './pages/Manage/PageList';
import BusinessList from './pages/Manage/BusinessList';
import PageInsight from './pages/Manage/PageInsight';
import BusinessInsight from './pages/Manage/BusinessInsight';
import '../style/base.scss';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/work' element={<Work />}>
                    <Route path='canvas' element={<Canvas />} />
                    <Route path='behavior' element={<Behavior />} />
                </Route>
                <Route path='/manage/page/list' element={<PageList />} />
                <Route path='/manage/business/list' element={<BusinessList />} />
                {/* 页面统计信息 */}
                <Route path='/manage/page/insight' element={<PageInsight />} />
                {/* 业务线统计信息 */}
                <Route path='/manage/business/insight' element={<BusinessInsight />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);
