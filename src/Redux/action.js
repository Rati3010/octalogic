import * as types from "./actionType"

export const userLogin = (payload) =>{
   return{
    type:types.USER_LOGIN_SUCCESS,
    payload
   }
}

export const userLogout = () =>{
    return{
     type:types.USER_LOGOUT_SUCCESS
    }
 }