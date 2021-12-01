import React,{useContext,createContext,useReducer} from "react";

export const StateContext =CreateContext();

export const StateProvider =({reducer,initialState,children})=>(

<StateContext.Provider value ={useReducer(reducer,initialState)}>
    {children}
</StateContext.Provider>  
)

export const useStateValue =()=>useContext(StateContext);