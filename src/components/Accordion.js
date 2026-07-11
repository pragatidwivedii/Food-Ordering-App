import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addItem } from "../utils/cartSlice";
import Add from "./Add";
const Accordion = ({resdata , showItem , showFunction}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        showFunction();
    }
    const handleItems = (dish) => {
       dispatch(addItem(dish));
    }
    const [showStatus , setshowStatus] = useState(false);
    return (
        <div className="m-2  w-6/12 items-center rounded-2xl  bg-gray-100">

            {/* //header */}

           <div className="flex justify-between m-2 p-2 rounded-xl shadow-lg bg-gray-100 hover:cursor-pointer" onClick={handleClick}>
             <div>{resdata.card.card.title}</div>
             <div>⬇️</div>
           </div>

           {/* //body */}
           {(showItem) ?
            resdata.card.card.itemCards.map((dish) =>{
                const {name,description,price,isVeg,ratings,id} = dish.card.info ;
                return (
                    <div key = {id} className="flex justify-between bg-white m-2 mb-3 p-2 rounded-xl ">
                        <div >
                        <h1 className="font-bold">{(isVeg == 0) ? "🟢" : "🔴"} {name}</h1>
                        <p className="text-sm text-gray-500">{description}</p>
                        <div className="flex m-2">
                            <h2 className="font-bold">₹{price/100}</h2>
                            <h2 className="ml-4 border border-green-600 bg-green-100 rounded-2xl px-1">{ratings.aggregatedRating.rating}  ⭐</h2>
                        </div>
                        </div>
                        <span className="p-2 text-center bg-white rounded-2xl ">
                        <Add Dish = {dish}/>
                        </span>
                    </div>
                );
            }) : (<div></div>)
        }
            
        </div>   
    )

}
export default Accordion;