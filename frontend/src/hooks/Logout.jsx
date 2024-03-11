import React from 'react'
import { useAuthContext } from './useAuthContext';


export const Logout = () => {

    const{dispatch} = useAuthContext();

    const useLogout = () => {
        localStorage.removeItem('user');
        dispatch({type: 'LOGOUT'})
    };

    return useLogout   
}

