import { configureStore } from '@reduxjs/toolkit'
import movieSlice from '../features/movieSlice'
import logger from 'redux-logger';
import apiSlice from '../features/apiSlice';
import homeMovieSlice from '../features/homeMovieSlice';
import topratedSlice from "../features/topratedSlice"

export const store = configureStore({
    reducer:{
        homemovie:homeMovieSlice,
        movie: movieSlice,
        token: apiSlice,
        topRated: topratedSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})