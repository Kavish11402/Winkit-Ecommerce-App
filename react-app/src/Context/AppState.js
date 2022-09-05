import AppContext from "./AppContext";
import {useState} from "react";

export default function AppState(props)
{
    const [cartOpen , setCartOpen] = useState(false)


  return(
    <AppContext.Provider value={

        {
        cartOpen,
        setCartOpen
        }

    }>

        {props.children}
    </AppContext.Provider>
  );
}