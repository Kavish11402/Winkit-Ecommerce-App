import HeaderComponent from "./Header/HeaderComponent";
import BodyComponent from "./Body/BodyComponent";
import FooterComponent from "./Footer/FooterComponent";

export default function HomeComponent()
{
  return(
    <div>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </div>
  );
}