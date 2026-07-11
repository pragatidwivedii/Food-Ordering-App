import { useDispatch , useSelector} from "react-redux";
import { useState } from "react";
import { addItem , removeItem , cleanCart} from "../utils/cartSlice";

const Add = ({Dish}) => {
    const dispatch =  useDispatch();
    const [showPopup , setshowPopup] = useState(false);
    const items = useSelector((store) => store.cart.items);
    const exist = items.find(
        item  =>  item.card.info.id === Dish.card.info.id
    );
    const quantity = (exist) ? exist.qty : 0 ;
    const handlePopup = () => {
        if(items.length > 0 && items[0].card.info.restaurantId !== Dish.card.info.restaurantId) {
            setshowPopup(true);
            return;
        }
        else{
            dispatch(addItem(Dish));
        }
    }

    const handleAddItem = () => {
        dispatch(cleanCart());
        setshowPopup(false);
    }

    const handleNo = () => {
        setshowPopup(false);
    }

    const removeItems = (Dish) => {
        dispatch(removeItem(Dish));
    }
    return (
        // returning a fragment to wrap multiple sibling elements
         <>  
            {showPopup && (<div>
            <div className="fixed inset-0 flex items-end justify-center mb-5  z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-5/12">
                    <h2 className="text-xl font-bold mb-4">Items already in cart</h2>
                    <p className="mb-4">Your cart contains items from another restaurant. Would you like to reset your cart for adding items from this restaurant?</p>
                    <div className="flex items-center justify-center w-6/12 m-auto gap-5">
                    <button className=" bg-orange-400 text-white px-4 py-2 rounded  font-bold cursor-pointer" onClick={handleAddItem}>YES, START AFRESH</button>
                    <button className=" bg-orange-400 text-white px-4 py-2 rounded  font-bold cursor-pointer" onClick={handleNo}>NO</button>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
         </div>)}

         {(quantity === 0 ) ? <button className="border-2 border-orange-400 bg-orange-400 text-white rounded-2xl px-2" onClick={() => handlePopup()}>Add +</button> 
            :   <div className=" flex border-2 border-orange-400 bg-orange-400 text-white rounded-2xl px-2">
                 <button className="font-bold cursor-pointer" onClick={() => removeItems(Dish)}>-</button>
                <span className="px-2">{exist.qty}</span>
             <button className="font-bold cursor-pointer" onClick={() => handlePopup(Dish)}>+</button>
            </div>}
        </>
    );

}

export default Add;