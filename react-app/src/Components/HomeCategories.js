import category1 from '../Assets/Images/atta_rice_dal.png';
import category2 from '../Assets/Images/baby.png';
import category3 from '../Assets/Images/bakery_biscuits.png';
import category4 from '../Assets/Images/chicken_meat.png';
import category5 from '../Assets/Images/cleaning_essentials.png';
import category6 from '../Assets/Images/cold_drinks_juices.png';
import category7 from '../Assets/Images/dairy_bread.png';
import category8 from '../Assets/Images/fruits_veggies.png';
import category9 from '../Assets/Images/home_office.png';
import category10 from '../Assets/Images/masala_oil.png';
import category11 from '../Assets/Images/organic_healthy.png';
import category12 from '../Assets/Images/paan_corner.png';
import category13 from '../Assets/Images/personal_care.png';
import category14 from '../Assets/Images/pet_care.png';
import category15 from '../Assets/Images/pharma_wellness.png';
import category16 from '../Assets/Images/sauces_spreads.png';
import category17 from '../Assets/Images/snacks_munchies.png';
import category18 from '../Assets/Images/sweet_tooth.png';
import category19 from '../Assets/Images/tea_coffee.png';
import category20 from '../Assets/Images/breakfast_instant.png'

export default function HomeCategories()
{
  return(

      <div className="max-w-7xl justify-between mx-auto flex flex-wrap align-baseline mt-12">
          <img className="w-32" src={category1}  alt={"category 1"}/>
          <img className="w-32" src={category2} alt={"category 2"}/>
          <img className="w-32" src={category3} alt={"category 3"}/>
          <img className="w-32" src={category4} alt={"category 4"}/>
          <img className="w-32" src={category5} alt={"category 5"}/>
          <img className="w-32" src={category6} alt={"category 6"}/>
          <img className="w-32" src={category7} alt={"category 7"}/>
          <img className="w-32" src={category8} alt={"category 8"}/>
          <img className="w-32" src={category9} alt={"category 9"}/>
          <img className="w-32" src={category10} alt={"category 10"}/>
          <img className="w-32" src={category11} alt={"category 11"}/>
          <img className="w-32" src={category12} alt={"category 12"}/>
          <img className="w-32" src={category13} alt={"category 13"}/>
          <img className="w-32" src={category14} alt={"category 14"}/>
          <img className="w-32" src={category15} alt={"category 15"}/>
          <img className="w-32" src={category16} alt={"category 16"}/>
          <img className="w-32" src={category17} alt={"category 17"}/>
          <img className="w-32" src={category18} alt={"category 18"}/>
          <img className="w-32" src={category19} alt={"category 19"}/>
          <img className="w-32" src={category20} alt={"category 20"}/>
      </div>
  );
}