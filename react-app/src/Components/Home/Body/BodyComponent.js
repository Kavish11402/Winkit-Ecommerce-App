import TopBanner from "./Components/Top/TopBanner";
import CategoryComponent from "./Components/Middle/CategoryComponent";
import SubCategoryComponent from "./Components/Middle/SubCategoryComponent";
import MidBannerComponent from "./Components/Middle/MidBannerComponent";
import BottomBanner from "./Components/Bottom/BottomBanner";

export default function BodyComponent()
{

    function NextArrow(props)
    {
        return(
            <div className="bg-white rounded-full absolute p-2 top-1/2 right-0 z-40 drop-shadow-xl">

                <svg
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={props.onClick}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>

            </div>
        )
    }

    function PreviousArrow(props)
    {
        return(
            <div className="bg-white rounded-full absolute p-2 top-1/2 left-0 z-40 drop-shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6" onClick={props.onClick}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>

            </div>
        )
    }



  return(
    <div className={"max-w-[73%] mx-auto mt-10 border-b-2 border-gray-300 pb-12"}>



        {/* Top Banner */}
        <TopBanner NextArrow={NextArrow} PreviousArrow={PreviousArrow} />


        {/* Middle CategoryComponent */}
        <CategoryComponent/>

        {/* Middle Banner */}
        <MidBannerComponent NextArrow={NextArrow} PreviousArrow={PreviousArrow} />

        {/* Middle Sub CategoryComponent */}
        <SubCategoryComponent NextArrow={NextArrow} PreviousArrow={PreviousArrow} />

        <BottomBanner/>


    </div>
  );
}