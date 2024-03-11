import {TurfsContext} from '../context/TurfsContext';
import { useContext } from 'react';


export const useTurfsContext = () =>{

    const context = useContext(TurfsContext);

    if (!context) {
        throw Error("useTurfContext must be used inside a AuthContextProvide")
    }


    return context
}