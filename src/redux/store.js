import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
reducer:{

}
});


export const AppDispatch = store.dispatch

export default store;