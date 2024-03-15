import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        //if other slices add here
    }
});
export default appStore;