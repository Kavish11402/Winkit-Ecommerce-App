import Slider from "react-slick";

import ChemistStoreImg1 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS1.jpg";
import ChemistStoreImg2 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS2.jpg";
import ChemistStoreImg3 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS3.jpg";
import ChemistStoreImg4 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS4.jpg";
import ChemistStoreImg5 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS5.jpg";
import ChemistStoreImg6 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS6.jpg";
import ChemistStoreImg7 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS7.jpg";
import ChemistStoreImg8 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS8.jpg";
import ChemistStoreImg9 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS9.jpg";
import ChemistStoreImg10 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS10.jpg";
import ChemistStoreImg11 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS11.jpg";
import ChemistStoreImg12 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS12.jpg";
import ChemistStoreImg13 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS13.jpg";
import ChemistStoreImg14 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS14.jpg";
import ChemistStoreImg15 from "../../../../../Assets/Images/SubCategoryImages/ChemistStore/CS15.jpg";

import BreakfastDairyImg1 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD1.jpg";
import BreakfastDairyImg2 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD2.jpg";
import BreakfastDairyImg3 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD3.jpg";
import BreakfastDairyImg4 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD4.jpg";
import BreakfastDairyImg5 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD5.jpg";
import BreakfastDairyImg6 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD6.jpg";
import BreakfastDairyImg7 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD7.jpg";
import BreakfastDairyImg8 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD8.jpg";
import BreakfastDairyImg9 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD9.jpg";
import BreakfastDairyImg10 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD10.jpg";
import BreakfastDairyImg11 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD11.jpg";
import BreakfastDairyImg12 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD12.jpg";
import BreakfastDairyImg13 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD13.jpg";
import BreakfastDairyImg14 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD14.jpg";
import BreakfastDairyImg15 from "../../../../../Assets/Images/SubCategoryImages/BreakfastDairy/BD15.jpg";

import BiscuitsSnacksChocolatesImg1 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC1.jpg";
import BiscuitsSnacksChocolatesImg2 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC2.jpg";
import BiscuitsSnacksChocolatesImg3 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC3.jpg";
import BiscuitsSnacksChocolatesImg4 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC4.jpg";
import BiscuitsSnacksChocolatesImg5 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC5.jpg";
import BiscuitsSnacksChocolatesImg6 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC6.jpg";
import BiscuitsSnacksChocolatesImg7 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC7.jpg";
import BiscuitsSnacksChocolatesImg8 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC8.jpg";
import BiscuitsSnacksChocolatesImg9 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC9.jpg";
import BiscuitsSnacksChocolatesImg10 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC10.jpg";
import BiscuitsSnacksChocolatesImg11 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC11.jpg";
import BiscuitsSnacksChocolatesImg12 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC12.jpg";
import BiscuitsSnacksChocolatesImg13 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC13.jpg";
import BiscuitsSnacksChocolatesImg14 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC14.jpg";
import BiscuitsSnacksChocolatesImg15 from "../../../../../Assets/Images/SubCategoryImages/BiscuitsSnacksChocolates/BSC15.jpg";

import SingleSubCategoryComponent from "./SingleSubCategoryComponent";

export default function SubCategoryComponent({NextArrow, PreviousArrow})
{
  return(

      <div className={"mt-12"}>

          {/* Chemist Store */}
          <div>

              <div className={"flex flex-row justify-between mb-7 px-3"}>
                  <p className={"font-bold text-2xl"}>Chemist Store</p>
                  <p className={"text-wGreen font-bold text-xl"}>see all</p>
              </div>


              <div>

                  <Slider slidesToShow={5} slidesToScroll={5} autoplay={false} autoplaySpeed={2000} nextArrow={<NextArrow/>} prevArrow={<PreviousArrow/>} infinite={false} >

                      <SingleSubCategoryComponent productImage={ChemistStoreImg1} productDescription={"Durex Invisible Super Ultra Thin Condom"} productQuantity={"10 Units"} productPrice={"336"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg2} productDescription={"Durex Play Intimate Sweet Strawberry ..."} productQuantity={"50 ml"} productPrice={"348"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg3} productDescription={"Moov Instant Pain Relieving Spray"} productQuantity={"80 g"} productPrice={"256"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg4} productDescription={"Dettol Original Alcohol Based Hand Sanitizer"} productQuantity={"200 ml"} productPrice={"90"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg5} productDescription={"Savlon Small Mask (White)"} productQuantity={"1 piece"} productPrice={"81"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg6} productDescription={"Hansaplast Washproof Adhesive Bandage (8 pieces)"} productQuantity={"1 pack (8 strips)"} productPrice={"22"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg7} productDescription={"Nestle Ceregrow Growing Up Baby Cereal"} productQuantity={"300 g"} productPrice={"310"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg8} productDescription={"3M 9513 Respirator KN95 Face Mask"} productQuantity={"1 unit"} productPrice={"95"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg9} productDescription={"Himalaya PartySmart Capsules"} productQuantity={"1 strip (5 capsules)"} productPrice={"80"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg10} productDescription={"Vicks Original Inhaler"} productQuantity={"0.5 ml"} productPrice={"58"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg11} productDescription={"Dettol Surface Disinfection & Personal Hygiene Antiseptic Liquid"} productQuantity={"500 ml"} productPrice={"194"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg12} productDescription={"Eno Regular Digestive Antacid"} productQuantity={"100 g"} productPrice={"135"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg13} productDescription={"Zandu Pancharishta Health Syrup"} productQuantity={"450 ml"} productPrice={"115"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg14} productDescription={"Dabur Sat Isabgol Psyllium Husk"} productQuantity={"200 g"} productPrice={"214"}/>
                      <SingleSubCategoryComponent productImage={ChemistStoreImg15} productDescription={"Dabur Immunity Booster Ashwagandha Tablets"} productQuantity={"60 units"} productPrice={"131"}/>

                  </Slider>

              </div>
          </div>

          {/* Breakfast & dairy */}
          <div>

              <div className={"flex flex-row justify-between mb-7 mt-12 px-3"}>
                  <p className={"font-bold text-2xl"}>Breakfast & dairy</p>
                  <p className={"text-wGreen font-bold text-xl"}>see all</p>
              </div>


              <div>

                  <Slider slidesToShow={5} slidesToScroll={5} autoplay={false} autoplaySpeed={2000} nextArrow={<NextArrow/>} prevArrow={<PreviousArrow/>} infinite={false} >

                      <SingleSubCategoryComponent productImage={BreakfastDairyImg1} productDescription={"Go Plain Cheese Slices"} productQuantity={"476 g"} productPrice={"312"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg2} productDescription={"Eggoz Farm Fresh White Eggs"} productQuantity={"1 pack (30 pieces)"} productPrice={"270"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg3} productDescription={"Amul Salted Butter (500 g)"} productQuantity={"500 g"} productPrice={"252"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg4} productDescription={"Nestle Gold Crunchy, Corn & Oat Flakes"} productQuantity={"475 g"} productPrice={"187"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg5} productDescription={"Kellogg's Original Cereals Corn Flakes"} productQuantity={"1.2 kg"} productPrice={"328"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg6} productDescription={"Kellogg's Muesli with 21% Fruit, Nut & Seeds"} productQuantity={"750 g"} productPrice={"340"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg7} productDescription={"Kellogg's Moons & Stars Cereals Chocos"} productQuantity={"1.2 kg"} productPrice={"370"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg8} productDescription={"BranO Plus Brown Bread"} productQuantity={"300 g"} productPrice={"35"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg9} productDescription={"Hershey's Chocolate Milk Shake"} productQuantity={"180 ml"} productPrice={"30"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg10} productDescription={"Amul Garlic & Herbs Butter"} productQuantity={"100 g"} productPrice={"53"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg11} productDescription={"Quaker Rolled Oats"} productQuantity={"1 kg"} productPrice={"160"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg12} productDescription={"Britannia Cream Cheese Spread"} productQuantity={"100 g"} productPrice={"83"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg13} productDescription={"Amul Taaza Toned Fresh Milk"} productQuantity={"500 ml"} productPrice={"26"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg14} productDescription={"Amul Taaza Homogenised Toned Milk"} productQuantity={"1 l"} productPrice={"70"}/>
                      <SingleSubCategoryComponent productImage={BreakfastDairyImg15} productDescription={"Amul Fresh Paneer"} productQuantity={"200 g"} productPrice={"80"}/>

                  </Slider>

              </div>
          </div>

          {/* Biscuits, snacks & chocolates */}
          <div>

              <div className={"flex flex-row justify-between mb-7 mt-12 px-3"}>
                  <p className={"font-bold text-2xl"}>Biscuits, snacks & chocolates</p>
                  <p className={"text-wGreen font-bold text-xl"}>see all</p>
              </div>


              <div>

                  <Slider slidesToShow={5} slidesToScroll={5} autoplay={false} autoplaySpeed={2000} nextArrow={<NextArrow/>} prevArrow={<PreviousArrow/>} infinite={false} >

                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg1} productDescription={"Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies 300 g"} productQuantity={"300 g"} productPrice={"122"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg2} productDescription={"4700BC Nutty Tuxedo Chocolate Popcorn"} productQuantity={"150 g"} productPrice={"190"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg3} productDescription={"Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits 300 g"} productQuantity={"300 g"} productPrice={"77"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg4} productDescription={"Cadbury Dairy Milk Home Treats Chocolate"} productQuantity={"126 g"} productPrice={"122"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg5} productDescription={"Haldiram's Bhujia"} productQuantity={"1 kg"} productPrice={"248"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg6} productDescription={"Sunfeast Dark Fantasy Yumfills Choco Pie"} productQuantity={"253 g"} productPrice={"76"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg7} productDescription={"Lay's American Style Cream & Onion Flavour Potato Chips - Pack of 2"} productQuantity={"2 x 104 g"} productPrice={"86"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg8} productDescription={"Britannia NutriChoice Digestive High Fibre Biscuit - Super Saver pack"} productQuantity={"1 kg"} productPrice={"186"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg9} productDescription={"Britannia Toastea Premium Bake Rusk"} productQuantity={"300 g"} productPrice={"39"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg10} productDescription={"Nestle KITKAT Wafer Bar Share Bag (7 packs inside)"} productQuantity={"119 g"} productPrice={"85"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg11} productDescription={"Lay's India's Magic Masala Chips"} productQuantity={"50 g"} productPrice={"20"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg12} productDescription={"Kurkure Masala Munch Crisps - Pack of 3"} productQuantity={"3 x 82 g"} productPrice={"51"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg13} productDescription={"Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3"} productQuantity={"3 x 55 g"} productPrice={"51"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg14} productDescription={"Bikano Rasgulla"} productQuantity={"1 kg"} productPrice={"189"}/>
                      <SingleSubCategoryComponent productImage={BiscuitsSnacksChocolatesImg15} productDescription={"Bikano Gulab Jamun"} productQuantity={"1 kg"} productPrice={"237"}/>

                  </Slider>

              </div>
          </div>

      </div>

  );
}