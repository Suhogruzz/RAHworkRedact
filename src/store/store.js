import {configureStore } from '@reduxjs/toolkit'
import serviceAddReducer from '../reducers/serviceAdd';
import serviceListReducer from '../reducers/serviceList';

const store = configureStore({
    reducer: {
        serviceAdd: serviceAddReducer,
        serviceList: serviceListReducer,
    }
})

export default store;