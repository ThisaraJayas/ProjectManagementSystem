import { REGISTER_REQUEST, LOGIN_REQUEST, GETUSER_REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, GETUSER_SUCCESS, LOGOUT } from "./ActionType";
const initialState={
    user:null,
    loading:false,
    error:null,
    jwt:null,
    projectSize:0,
}
export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GETUSER_REQUEST:
            return {...state,loading:true,error:null}
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state,loading:false,error:null,jwt:action.payload.jwt}

        case GETUSER_SUCCESS:
            return {...state,loading:false,error:null,user:action.payload}

        case LOGOUT:
            return initialState
        
        default:
            return state;
    }
}