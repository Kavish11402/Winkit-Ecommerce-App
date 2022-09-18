import HeaderComponent from "../Components/Home/Header/HeaderComponent";
import BodyComponent from "../Components/Home/Body/BodyComponent";
import FooterComponent from "../Components/Home/Footer/FooterComponent";

export default function HomePage()
{
  return(
      <div>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
  );
}