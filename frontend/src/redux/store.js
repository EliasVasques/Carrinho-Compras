import { configureStore } from '@reduxjs/toolkit'
import paginasReducer from './slices/paginasSlice'

export const store = configureStore({
    reducer: {
        paginas: paginasReducer,
    },
})