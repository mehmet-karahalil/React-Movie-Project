import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../features/movieSlice'
import logger from 'redux-logger';

export const store = configureStore({
    reducer:{
        movie: movieSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})