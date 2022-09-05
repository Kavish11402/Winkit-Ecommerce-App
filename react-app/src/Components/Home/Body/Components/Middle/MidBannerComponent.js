import AdImg1 from "../../../../../Assets/Images/AdImages/AdImg1.jpg";
import AdImg2 from "../../../../../Assets/Images/AdImages/AdImg2.jpg";
import AdImg3 from "../../../../../Assets/Images/AdImages/AdImg3.jpg";

import Slider from "react-slick";

export default function MidBannerComponent({NextArrow, PreviousArrow})
{
  return(

      <Slider
          slidesToShow={1}
          autoplay={true}
          autoplaySpeed={2000}
          nextArrow={<NextArrow/>}
          prevArrow={<PreviousArrow/>}
          responsive={
              [
                  {  breakpoint: 480, settings: { slidesToShow: 1 } },
                  { breakpoint: 768, settings: { slidesToShow: 2 } }
              ]}
      >

          <div> <img className={"max-w-6xl mx-auto"} src={AdImg1} alt={"Slider img 1"}/> </div>

          <div> <img className={"max-w-6xl mx-auto"} src={AdImg2} alt={"Slider img 2"}/> </div>

          <div> <img className={"max-w-6xl mx-auto"} src={AdImg3} alt={"Slider img 3"}/> </div>

      </Slider>

  );
}