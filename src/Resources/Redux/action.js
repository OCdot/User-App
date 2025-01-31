import { LOGIN, LOGOUT } from "./constants";


export const login = data => ({
  type: LOGIN,
  payload: {
    username: data.username,
    password: data.password,
  },
});

export const logout =()=>({
    type : LOGOUT,
    payload:{}
})