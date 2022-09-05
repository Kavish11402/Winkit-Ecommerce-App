import BannerScooter from "../../../../../Assets/Images/winkit54.png"
import BannerMobile from "../../../../../Assets/Images/winkit53.png"
import QRCodeIMG from "../../../../../Assets/Images/QRCode.png"
import FastDelivery from "../../../../../Assets/Images/BottomBanner/10_minute_delivery.png"
import EasyReturnsRefund from "../../../../../Assets/Images/BottomBanner/Easy_Returns_Refund_2.png"
import WideAssortment from "../../../../../Assets/Images/BottomBanner/Wide_Assortment_1.png"
import BestPricesOffers from "../../../../../Assets/Images/BottomBanner/Best_Prices_Offers.webp"

import BottomSingleBannerComponent from "./BottomSingleBannerComponent";
export default function BottomBanner()
{
  return(
    <div className={"pt-32"}>

        <div className={"relative bg-MobileBannerBG  flex flex-col justify-center h-[520px] px-20 rounded-3xl  "}>


            <div>
                <img src={BannerMobile} className={"z-10 absolute bottom-4"}  alt={"BannerMobileIMG"}/>
            </div>


            <div className={"z-40 flex flex-row items-center"}>
                <img src={BannerScooter} className={"ml-32 animate-scooter-Motion"}  alt={"BannerScooterIMG"}/>

                <div className={"ml-52 h-fit"}>

                    <p className={"font-bold text-5xl font-Ubuntu"}>Get the Winkit app</p>

                    <div className={"flex flex-row items-center mt-7"}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#44b236" className="w-7 h-7">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            />
                        </svg>

                        <p className={"font-Catamaran text-2xl ml-5"}>Get live order tracking</p>

                    </div>

                    <div className={"flex flex-row items-center mt-7"}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#44b236" className="w-7 h-7">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            />
                        </svg>

                        <p className={"font-Catamaran text-2xl ml-5"}>Get latest feature updates</p>

                    </div>

                    <div className={"bg-QRBanner flex flex-row items-center p-4 mt-6 rounded-xl"}>
                        <div>
                            <img src={QRCodeIMG} className={"h-24 w-28"}  alt={"QR Code"}/>
                        </div>

                        <div className={"ml-5"} >
                            <p className={"font-bold font-Ubuntu text-2xl mb-3"}> Simple way to download the Winkit app </p>
                            <p> Scan QR code and download now </p>
                        </div>

                    </div>


                </div>


            </div>





        </div>


        <div className={"flex flex-row justify-evenly mt-28"}>

            <BottomSingleBannerComponent Image={FastDelivery} Heading={"Superfast Delivery"} Description={"Get your order delivered to your doorstep at the earliest from dark stores near you."}/>
            <BottomSingleBannerComponent Image={BestPricesOffers} Heading={"Best Prices & Offers"} Description={"Cheaper prices than your local supermarket, great cashback offers to top it off."}/>
            <BottomSingleBannerComponent Image={WideAssortment} Heading={"Wide Assortment"} Description={"Choose from 5000+ products across food, personal care, household & other categories"}/>
            <BottomSingleBannerComponent Image={EasyReturnsRefund} Heading={"Easy Returns/Refund"} Description={"Not satisfied with a product? Return it at the doorstep & get a refund within hours."}/>

        </div>

    </div>
  );
}