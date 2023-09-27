import { configureStore } from '@reduxjs/toolkit';

import businessReduce from './storeBusiness/businessReduce'

export const store = configureStore({
    reducer: {
        counter: businessReduce,
    },
});

