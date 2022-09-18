import AppContext from "./AppContext";
import {useEffect, useState} from "react";
import {RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import {auth} from "../FireBase";
import toast from "react-hot-toast";

export default function AppState(props)
{
    const [cartOpen , setCartOpen] = useState(false)
    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [userLogged , setUserLogged ] =useState(false)
    const [isOtpSent, setIsOtpSent] = useState(false)

    useEffect(()=>{
        setUserLogged(JSON.parse(localStorage.getItem("userStatus")))
    },[])

    function loginHandlerOTPSent(phoneNumber)
    {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' }, auth);


        signInWithPhoneNumber(auth, ("+91"+phoneNumber), (window.recaptchaVerifier) )
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setIsOtpSent(true)
                toast.success(`OTP Send to +91-${phoneNumber} Successfully`)

            }).catch((error) => {
            toast.error(`Error in sending OTP to +91-${phoneNumber}`)
        });
    }

    function loginHandlerOTPVerifier(OTP)
    {
        confirmationResult.confirm(OTP).then((result) => {
            //const user = result.user;
            localStorage.setItem("userStatus",JSON.stringify(true))
            toast.success("OTP Verified Successfully")
            setIsLoginOpen(false)
            setIsOtpSent(false)
            setUserLogged(true)
        }).catch((error) => { toast.error("OOPS Error Occurred") });
    }


  return(
    <AppContext.Provider value={

        {
            cartOpen,
            setCartOpen,
            isLoginOpen,
            setIsLoginOpen,
            userLogged,
            setUserLogged,
            isOtpSent,
            setIsOtpSent,

            loginHandlerOTPSent,
            loginHandlerOTPVerifier
        }

    }>

        {props.children}
    </AppContext.Provider>
  );
}