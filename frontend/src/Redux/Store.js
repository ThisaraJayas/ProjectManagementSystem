import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { projectReducer } from "./Project/Reducer";
import { ChatReducer } from "./Chat/Reducer";
import { commentReducer } from "./Comment/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    chat: ChatReducer,
    comment: commentReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

//define wrap in main.jsx