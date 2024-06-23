import { error } from 'console';
import * as actionTypes from './ActionTypes'
const initialState={
    messages:[],
    loading:false,
    error:null,
    chat:null
}
export const ChatReducer=(state=initialState,action)=>{
    switch(action.type){
       
        case actionTypes.FETCH_MESSAGES_REQUEST:
        case actionTypes.SEND_MESSAGES_REQUEST:
        case actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            }
        case actionTypes.FETCH_MESSAGES_SUCCESS:
        case actionTypes.FETCH_CHAT_MESSAGES_SUCCESS:
            return{
                ...state,
                loading:false,
                messages:[...state.messages,action.message]
            }
        case actionTypes.SEND_MESSAGES_SUCCESS:
            return{
                ...state,
                loading: false,
                messages:[...state.messages, action.message]
            }
        case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return{
                ...state,
                loading:false,
                chat: action.chat
            }
        case actionTypes.FETCH_MESSAGES_FAILURE:
        case actionTypes.SEND_MESSAGES_FAILURE:
        case actionTypes.FETCH_CHAT_MESSAGES_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.error
            }
        default:
            state;
    }
}