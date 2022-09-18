export default function SingleCartProductComponent({ProductDetails})
{


    ProductDetails = {...ProductDetails, ...{productPrice:`₹ ${ProductDetails.productPrice}`}}


    return(
        <div className={"flex flex-row border-b-2 border-gray-300 p-3"}>

            <div className={"flex items-center w-28"}>
                <img src={ProductDetails.productImage}  alt="Product Image" className={"h-20"}/>
            </div>


            <div className={"w-full pl-2"}>

                <div className={"text-sm"}><p>{ProductDetails.productName}</p></div>
                <div className={"text-sm"}><p>{ProductDetails.productQuantity}</p></div>
                <div className={"flex flex-row justify-between items-center"}>

                    <p className={"font-bold"}>{ProductDetails.productPrice}</p>

                    <div className={"flex flex-row text-white font-bold text-xl"}>

                        <button className={"px-3 rounded-l-lg bg-wGreen py-1 hover:bg-wHoverGreen transition-all ease-in-out"}>+</button>
                        <p className={"px-3 bg-wGreen py-1"}>1</p>
                        <button className={"px-3 rounded-r-lg bg-wGreen py-1 hover:bg-wHoverGreen transition-all ease-in-out"}>-</button>

                    </div>

                </div>






            </div>

        </div>
    );
}