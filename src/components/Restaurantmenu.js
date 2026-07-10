import { useParams } from "react-router";
import { useState } from "react";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantTitle from "./RestaurantTitle";
import Accordion from "./Accordion";


const Restaurantmenu = () => {
    const { resId } = useParams();
    const Resdata = useRestaurantmenu(resId); //customHooks
    const [showIndex , setshowIndex] = useState(null);
    return (
        <div className="flex flex-col justify-center items-center">
            <RestaurantTitle resdata = {Resdata}/>
            {Resdata?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((res , index) => {
    
                return (<Accordion 
                    resdata = {res} 
                    key={res.card.card.title} 
                    showItem = {(index == showIndex) ? true : false}
                    showFunction = {() => setshowIndex((showIndex == index) ? null : index)}
                    />);
            })}
        </div>
       
    );
}

export default Restaurantmenu;