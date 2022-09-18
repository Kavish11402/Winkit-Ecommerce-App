import HeaderComponent from "./Header/HeaderComponent";
import BodyComponent from "./Body/BodyComponent";
import FooterComponent from "./Footer/FooterComponent";
import CartComponent from "./Cart/CartComponent";

export default function HomeComponent()
{
  return(
    <div>
        <CartComponent/>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
    </div>
  );
}