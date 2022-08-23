import { configureStore } from '@reduxjs/toolkit';
import vtree from '../slice/vtree';
import api from '../slice/api';

export default configureStore({
    reducer: {
        vtree,
        api
    }
});
