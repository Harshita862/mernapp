import React, { createContext, useContext, useReducer } from 'react'

const CarStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action)=>{
switch(action.type){
    case "ADD":
        return [...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        default:
            console.log("error in reducer");
}


}

export const CartProvider = ({children})=>{
const[state,dispatch] = useReducer(reducer,[])
    return(
<CartDispatchContext.Provider value={dispatch}>
    <CarStateContext.Provider value={state}>
        {children}
    </CarStateContext.Provider>
</CartDispatchContext.Provider>
    )
}
export const useCart =() => useContext(CarStateContext);
export const useDispatchCart =() => useContext(CartDispatchContext);