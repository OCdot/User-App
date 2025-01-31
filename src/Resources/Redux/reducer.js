const initialState = {
    isLoggedIn : false,
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'LOGIN':{
            return{
                ...state,
                isLoggedIn : true,
                username : action.payload.username,
                password : action.payload.password
            }
        }
        case 'LOGOUT':{
            return{
                ...state,
                isLoggedIn: false,
            }
        }
        default :{
            return state
        }
    }
}