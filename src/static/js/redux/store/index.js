import { configureStore } from '@reduxjs/toolkit';
import vtree from '../slice/vtree';
import page from '../slice/page';
import business from '../slice/business';

export default configureStore({
    reducer: {
        page,
        business,
        vtree
    }
});
