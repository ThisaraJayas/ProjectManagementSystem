import api from "@/config/api"
import * as actionTypes from "./ActionTypes"

export const sendMessage = (messageData)=>{
    
    return async(dispatch)=>{
        dispatch({type: actionTypes.SEND_MESSAGES_REQUEST})
        try{

            const response = await api.post("/api/messages/send",messageData)
            dispatch({type: actionTypes.SEND_MESSAGES_SUCCESS, message: response.data})
        }catch(error){
            console.log(error);
            dispatch({type:actionTypes.SEND_MESSAGES_FAILURE, error: error.message})
        }

    }
}

export const fetchChatByProject = (projectId)=>{
    
    return async(dispatch)=>{
        dispatch({type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST})
        try{

            const response = await api.get(`/api/projects/${projectId}/chat`)
            console.log("Fetch Chat ",response.data);
            dispatch({type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS, message: response.data})
        }catch(error){
            console.log(error);
            dispatch({type:actionTypes.FETCH_CHAT_MESSAGES_FAILURE, error: error.message})
        }

    }
}

export const fetchChatMessages = (chatId)=>{
    
    return async(dispatch)=>{
        dispatch({type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST})
        try{
            const response = await api.get(`/api/messages/chat/${chatId}`)
            console.log("Fetch messages ",response.data);
            dispatch({type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,chatId, chat: response.data})
        }catch(error){
            console.log(error);
            dispatch({type:actionTypes.FETCH_CHAT_MESSAGES_FAILURE, error: error.message})
        }

    }
}