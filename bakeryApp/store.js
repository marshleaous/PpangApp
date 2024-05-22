import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/CartSlice'
import { restaurantSlice } from './slices/RestaurantSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer
  },
})