import { configureStore} from "@reduxjs/toolkit";
import productReducer, {productFetching} from "../features/productSlice";
import cartReducer from "../features/cartSlice";
export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

store.dispatch(productFetching())
