import ProductImg1 from "../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC1.jpg";
import ProductImg2 from "../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC2.jpg";
import ProductImg3 from "../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC3.jpg";
import ProductImg4 from "../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC4.jpg";

import {Fragment, useContext, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import AppContext from "../../../Context/AppContext";
import SingleCartProductComponent from "./SingleCartProductComponent";
import CartBillComponent from "./CartBillComponent";



export default function CartComponent()
{

    const appContext = useContext(AppContext)
  return(

      <Transition.Root show={appContext.cartOpen} as={Fragment}>


          <Dialog as="div" className="relative z-50" onClose={appContext.setCartOpen}>

              <div className="fixed inset-0 bg-black/60" />

              <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">


                          <Transition.Child as={Fragment} enter="transform transition ease-in-out duration-500 sm:duration-700" enterFrom="translate-x-full" enterTo="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leaveFrom="translate-x-0" leaveTo="translate-x-full">

                              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">

                                  <div className="flex h-full flex-col overflow-y-scroll bg-white">


                                      <div className={"flex flex-row justify-between p-3 sticky top-0 bg-white border-b-2 border-gray-300"}>
                                          <p className={"font-bold text-2xl"}>My Cart</p>

                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8" onClick={()=>{appContext.setCartOpen(false)}}>
                                              <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"/>
                                          </svg>

                                      </div>


                                      <div className={"border-t-[16px] border-b-[16px] border-gray-200"}>
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } /><SingleCartProductComponent ProductDetails={ { productImage : ProductImg1, productName: "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies", productQuantity: "300 g", productPrice: "122" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg2, productName: "4700BC Nutty Tuxedo Chocolate Popcorn", productQuantity: "150 g", productPrice: "190" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg3, productName: "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits", productQuantity: "300 g", productPrice: "77" } } />
                                          <SingleCartProductComponent ProductDetails={ { productImage : ProductImg4, productName: "Cadbury Dairy Milk Home Treats Chocolate", productQuantity: "126 g", productPrice: "122" } } />
                                      </div>


                                      <div className={"border-t-2 border-gray-300 sticky bottom-0 bg-white"}>
                                          <CartBillComponent/>
                                      </div>


                                  </div>

                              </Dialog.Panel>

                          </Transition.Child>
                      </div>
                  </div>
              </div>

          </Dialog>





      </Transition.Root>

  )
}