import { useDispatch , useSelector} from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useState } from "react";
import { addItem , removeItem } from "../utils/cartSlice";

const Add = ({Dish}) => {
    const dispatch =  useDispatch();
    const items = useSelector((store) => store.cart.items);
    const exist = items.find(
        item  =>  item.card.info.id === Dish.card.info.id
    );
    const quantity = (exist) ? exist.qty : 0 ;

    const addItems = (Dish) => {
        dispatch(addItem(Dish));
    }

    const removeItems = (Dish) => {
        dispatch(removeItem(Dish));
    }
    return (quantity === 0 ) ? <button className="border-2 border-orange-400 bg-orange-400 text-white rounded-2xl px-2" onClick={() => addItems(Dish)}>Add +</button> 

    :   <div className=" flex border-2 border-orange-400 bg-orange-400 text-white rounded-2xl px-2">
                <button className="font-bold cursor-pointer" onClick={() => removeItems(Dish)}>-</button>
                <span className="px-2">{exist.qty}</span>
                <button className="font-bold cursor-pointer" onClick={() => addItems(Dish)}>+</button>
        </div>

}

export default Add;