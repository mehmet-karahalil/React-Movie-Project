import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../features/movieSlice'
import logger from 'redux-logger';
import apiSlice from '../features/apiSlice';

export const store = configureStore({
    reducer:{
        movie: movieSlice,
        token: apiSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})