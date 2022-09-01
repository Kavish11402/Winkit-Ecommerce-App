import SliderImg1 from "../Assets/Images/winkit02.jpg"
import SliderImg2 from "../Assets/Images/winkit03.jpg"
import SliderImg3 from "../Assets/Images/winkit04.jpg"
import SliderImg4 from "../Assets/Images/winkit05.jpeg"

import Slider from "react-slick"

export default function HomeBanner()
{

    function NextArrow(props)
    {
        return(
            <div className="bg-white rounded-full absolute p-2 top-1/2 right-0 z-50">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                    onClick={props.onClick}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>
        )
    }

    function PreviousArrow(props)
    {
        return(
            <div className="bg-white rounded-full absolute p-2 top-1/2 left-0 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="w-6 h-6" onClick={props.onClick}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                </svg>


            </div>
        )
    }


  return(
    <div className={"max-w-7xl mx-auto mt-10"}>
      <Slider
          slidesToShow={3}
          autoplay={true}
          autoplaySpeed={2000}
          nextArrow={<NextArrow/>}
          prevArrow={<PreviousArrow/>}
          responsive={[
              {
                  breakpoint: 480,
                  settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true }
              },
              {
                  breakpoint: 768,
                  settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true }
              }]}


      >


        <img className={"h-48 pl-8 pr-4"} src={SliderImg1}/>
        <img className={"h-48 pl-8 pr-4"} src={SliderImg2}/>
        <img className={"h-48 pl-8 pr-4"} src={SliderImg3}/>
        <img className={"h-48 pl-8 pr-4"} src={SliderImg4}/>
      </Slider>
    </div>
  );
}