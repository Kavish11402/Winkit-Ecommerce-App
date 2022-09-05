import SliderImg1 from "../../../../../Assets/Images/AdImages/winkit02.jpg";
import SliderImg2 from "../../../../../Assets/Images/AdImages/winkit03.jpg";
import SliderImg3 from "../../../../../Assets/Images/AdImages/winkit04.jpg";
import SliderImg4 from "../../../../../Assets/Images/AdImages/winkit05.jpeg";
import Slider from "react-slick";

export default function TopBanner({NextArrow, PreviousArrow})
{
  return(
      <Slider
          slidesToShow={3}
          autoplay={true}
          autoplaySpeed={2000}
          nextArrow={<NextArrow/>}
          prevArrow={<PreviousArrow/>}
          responsive={
              [
                  {  breakpoint: 480, settings: { slidesToShow: 1 } },
                  { breakpoint: 768, settings: { slidesToShow: 2 } }
              ]} >


          <img className={"h-48 px-5"} src={SliderImg1} alt={"Slider img 1"}/>
          <img className={"h-48 px-5"} src={SliderImg2} alt={"Slider img 2"}/>
          <img className={"h-48 px-5"} src={SliderImg3} alt={"Slider img 3"}/>
          <img className={"h-48 px-5"} src={SliderImg4} alt={"Slider img 4"}/>
      </Slider>
  );
}