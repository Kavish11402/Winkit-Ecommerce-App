import {useContext, useRef} from 'react'
import AppContext from "../../Context/AppContext";
import {Dialog} from "@headlessui/react";


export default function LoginComponent() {

    const appContext = useContext(AppContext);
    const phoneNumber = useRef(null);
    const OTP = useRef(null);



    return(

        <Dialog open={appContext.isLoginOpen} onClose={() => appContext.setIsLoginOpen(false)} className={"relative z-50"} >

            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm  "/>

            {/* Full-screen container to center the panel */}
            <div className="fixed inset-0 flex items-center justify-center">

                <Dialog.Panel className="mx-auto bg-white rounded-xl">

                    <div className={"flex flex-col"}>



                        <div className={"flex flex-row justify-center py-6 text-2xl text-gray-400"}>
                            <p>Phone Number Verification</p>
                        </div>

                        <div className={"bg-gray-200 flex flex-col items-center px-36 py-10 rounded-b-xl "}>



                            {


                                appContext.isOtpSent?
                                    <div>
                                        <form onSubmit={(event)=>{event.preventDefault(); appContext.loginHandlerOTPVerifier(OTP.current.value);}}>
                                            <div className={"flex flex-col items-center font-medium mb-6 "}>


                                                <p className={"mb-7"}>Enter 6 digit code sent to your phone</p>

                                                <div className={"relative"}>

                                                    <span className={"absolute inset-y-0 flex items-center pl-3"} >

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/>
                                                        </svg>

                                                    </span>

                                                    <input className={"border-0 ring-2 ring-gray-400 focus:ring-2 focus:ring-wGreen pl-10"} ref={OTP} type={"number"} onChange={(event)=>{ const maxLength = 6; if(event.target.value.length > maxLength) event.target.value = (event.target.value).slice(0,maxLength); }} />

                                                </div>

                                                <button type={"submit"}  className={"bg-wGreen hover:bg-wHoverGreen transition-all text-white font-bold px-[6.3rem] py-2 rounded mt-6"}> Submit </button>
                                                <button className={"bg-red-600 hover:bg-red-500 transition-all text-white font-bold px-[6.7rem] py-2 rounded mt-3"} onClick={()=>{ appContext.setIsLoginOpen(false); appContext.setIsOtpSent(false) }}> Close </button>



                                            </div>
                                        </form>
                                    </div>

                                    :

                                    <div>
                                        <div className={"flex flex-col items-center font-medium mb-6 "}>
                                        <p>Enter your phone number to</p>
                                        <p> Login/Sign up </p>
                                        </div>

                                        <form className={"flex flex-col items-center "} onSubmit={(event)=>{ event.preventDefault(); appContext.loginHandlerOTPSent(phoneNumber.current.value) }}>
                                            <div className={"relative"}>

                                                <span className={"absolute inset-y-0 flex items-center pl-3"} >

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                                </svg>

                                <p>  +91- </p>


                                </span>

                                                <input className={"border-0 ring-2 ring-gray-400 focus:ring-2 focus:ring-wGreen pl-16"} type={"number"} ref={phoneNumber} onChange={(event)=>{ const maxLength = 10; if(event.target.value.length > maxLength) event.target.value = (event.target.value).slice(0,maxLength); }} />

                                            </div>

                                            <div className={"mt-6"} id="recaptcha-container"> </div>

                                            <button type={"submit"} className={"bg-wGreen hover:bg-wHoverGreen transition-all text-white font-bold px-28 py-2 rounded mt-6"}> Next </button>
                                            <button className={"bg-red-600 hover:bg-red-500 transition-all text-white font-bold px-[6.7rem] py-2 rounded mt-3"} onClick={()=>{ appContext.setIsLoginOpen(false); appContext.setIsOtpSent(false) }}> Close </button>
                                        </form>

                                    </div>

                            }



                        </div>




                    </div>

                </Dialog.Panel>



            </div>

        </Dialog>


    )
}
