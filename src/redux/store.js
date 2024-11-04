import { configureStore } from '@reduxjs/toolkit';
import PostSlice from './Slices/PostSlice'; // Ensure you're exporting the default reducer
import cartSlice from './Slices/cartSlice'; // Ensure you're exporting the default reducer

export const store = configureStore({
    reducer: {
        posts: PostSlice,
        cart: cartSlice,
    },
});
