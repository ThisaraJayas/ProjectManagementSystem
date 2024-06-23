import api from "@/config/api"
import * as actionTypes from "./ActionTypes"

export const getUserSubscription = (jwt)=>{
    
    return async(dispatch)=>{
        dispatch({type: actionTypes.GET_USER_SUBSCRIPTION_REQUEST})
        try{
            const response = await api.get(`/api/subscription/user`,{
                headers:{
                    "Authorization":`Bearer ${jwt}`
                }
            })
            console.log("users subscription ",response.data);
            dispatch({type: actionTypes.GET_USER_SUBSCRIPTION_SUCCESS, payload: response.data})
        }catch(error){
            console.log("Error ",error);
            dispatch({type:actionTypes.GET_USER_SUBSCRIPTION_FAILURE, payload: error.message})
        }

    }
}

export const upgradeSubscription = ({planType})=>{
    
    return async(dispatch)=>{
        dispatch({type: actionTypes.UPGRADE_SUBSCRIPTION_REQUEST})
        try{
            const response = await api.patch(`/api/subscriptions/upgrade`,null,{
                params:{
                    planType:planType,
                }
            })
            console.log("upgrade subscription ",response.data);
            dispatch({type: actionTypes.UPGRADE_SUBSCRIPTION_SUCCESS, payload: response.data})
        }catch(error){
            console.log("Error ",error);
            dispatch({type:actionTypes.UPGRADE_SUBSCRIPTION_FAILURE, payload: error.message})
        }

    }
}