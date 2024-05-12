import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'
import popupReducer from "./popup";

export default configureStore({
    reducer: {
        user: userReducer,
        popup:popupReducer
    },
})

//reducer에 상태관리할 것들을 저장함