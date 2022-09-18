export default function CartBillComponent() 
{
  return(
    <div className={"px-4 pt-2"}>


        <div>
            <p className={"font-bold text-xl mb-3"}>Bill details</p>

            <div className={"flex flex-row justify-between text-sm mb-1"}>
                <p>MRP</p> <p>₹440</p>
            </div>

            <div className={"flex flex-row justify-between text-sm pb-4 "}>
                <p>Packaging charge</p> <p>₹337</p>
            </div>

            <div className={"flex flex-row justify-between font-bold "}>
                <p>Bill total</p> <p>₹337</p>
            </div>


        </div>

        <div className={"mt-4 mb-4"}>
            <button className={"bg-wGreen hover:bg-wHoverGreen text-white font-bold flex flex-row justify-between w-full rounded-lg px-4 py-4"}>
                <p>₹ 337</p>
                <div className={"flex flex-row"}>
                    <p>Proceed To Checkout</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                    </svg>

                </div>
            </button>
        </div>


    </div>
  );
}