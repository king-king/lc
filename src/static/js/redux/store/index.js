import { configureStore } from '@reduxjs/toolkit';
import vtree from '../slice/vtree';

export default configureStore({
    reducer: {
        vtree
    }
});
