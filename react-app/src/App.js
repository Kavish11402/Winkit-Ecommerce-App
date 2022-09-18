import LoginComponent from "./Components/Login/LoginComponent";
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AccountPage from "./Pages/AccountPage";
import CartComponent from "./Components/Home/Cart/CartComponent";

export default function App()
{
    return(

        <>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="home" element={<HomePage/>}/>
                <Route path="account" element={ <AccountPage/> }/>

            </Routes>

            <LoginComponent/>
            <CartComponent/>

        </>

    )
}