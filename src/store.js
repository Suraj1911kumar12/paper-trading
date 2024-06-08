import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./redux/counter/counterSlice";

export default configureStore({
    reducer: {
        counter: counterSlice
    }
})