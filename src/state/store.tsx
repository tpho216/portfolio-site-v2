import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({reducer, middleware: getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
});

export default store;