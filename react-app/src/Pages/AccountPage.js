import HeaderComponent from "../Components/Home/Header/HeaderComponent";
import FooterComponent from "../Components/Home/Footer/FooterComponent";
import AccountBodyComponent from "../Components/Account/AccountBodyComponent";

export default function AccountPage()
{
  return(
      <>
        <HeaderComponent/>
        <AccountBodyComponent/>
        <FooterComponent/>
      </>
  );
}