/*
 * Created by king at 2022-8-28 22:21:05
 * Copyright (c) 2022
 */
import PageWrapper from '../component/PageWrapper';
import Home from '../pages/Home';
import Work from '../pages/Work';
import Canvas from '../pages/Work/Canvas';
import Behavior from '../pages/Work/Behavior';
import PageList from '../pages/Manage/PageList';
import BusinessList from '../pages/Manage/BusinessList';
import PageInsight from '../pages/Manage/PageInsight';
import BusinessInsight from '../pages/Manage/BusinessInsight';
import BusinessPageList from '../pages/Manage/BusinessPageList';
import NotFound from '../pages/NotFound';

export default [
    {
        path: '/',
        comonent: PageWrapper(Home, '首页')
    }, {
        path: '/work',
        comonent: Work,
        children: [
            {
                path: 'canvas',
                comonent: PageWrapper(Canvas, '配置页面')
            }, {
                path: 'behavior',
                comonent: PageWrapper(Behavior, '配置动作')
            }
        ]
    }, {
        path: '/manage/page/list',
        comonent: PageWrapper(PageList, '页面列表')
    }, {
        path: '/manage/business/list',
        comonent: PageWrapper(BusinessList, '业务线列表')
    }, {
        path: '/manage/page/insight',
        comonent: PageWrapper(PageInsight, '页面统计信息')
    }, {
        path: '/manage/business/insight',
        comonent: PageWrapper(BusinessInsight, '业务线统计信息')
    }, {
        path: '/manage/business/pagelist',
        comonent: PageWrapper(BusinessPageList, '业务线页面列表')
    }, {
        path: '*',
        comonent: PageWrapper(NotFound, '404')
    }
];
