import {createContext, useReducer} from 'react';

export const TurfsContext = createContext();



export const TurfsReducer = (state,action) => {

    switch (action.type) {
        case 'SET_TURFS':
            return {
                Turfs : action.payload
            }
            case 'CREATE_TURFS':
                return {
                   Turfs : [action.payload , ...state.Turfs]              
                }
    
        default:
            return state
    }
}


export const TurfsContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(TurfsReducer , {Turfs : null});

    
  return (

   <TurfsContext.Provider value={{...state, dispatch}}>
     {children}
   </TurfsContext.Provider>

  )
}
