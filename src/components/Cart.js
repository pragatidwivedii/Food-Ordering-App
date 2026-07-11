import { useSelector , useDispatch } from "react-redux";
import { removeItem , addItem} from "../utils/cartSlice";

const Cart = () => {
    const items = useSelector((store)=>store.cart.items);
    console.log(items);
    const dispatch = useDispatch();
    const removeItems = (item) =>{
        dispatch(removeItem(item));
    }
    const addItems = (index) =>{
        dispatch(addItem(index));
    }
    
    return (  (items.length === 0)  ?  <img className="m-auto w-3/12" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHIFnCMlGE5I6L2cFq46W1_jB26MPvRs5cNIWBOizhDf_xZTuRg1RWbIM&s=10" alt="Empty Cart" />
    
            : items.map((item , index) =>{
            const {name,description,price,isVeg,ratings,id} = item.card.info ;
            return (
                <div key = {id} className="flex justify-center">
                <div  className="flex justify-between bg-white m-2 mb-3 p-2 rounded-xl w-6/12">
                    <div >
                    <h1 className="font-bold">{(isVeg == 0) ? "🟢" : "🔴"} {name}</h1>
                    <p className="text-sm text-gray-500">{description}</p>
                    <div className="flex m-2">
                        <h2 className="font-bold">₹{price/100}</h2>
                        <h2 className="ml-4 border border-green-600 bg-green-100 rounded-2xl px-1">{ratings.aggregatedRating.rating}  ⭐</h2>
                    </div>
                    </div>
                    <span className="p-2 text-center bg-white rounded-2xl ">
                    <div className=" flex border-2 border-orange-400 bg-orange-400 text-white rounded-2xl px-2">
                       <button className="font-bold cursor-pointer" onClick={() => removeItems(item)}>-</button>
                        <span className="px-2">{item.qty}</span>
                        
                        <button className="font-bold cursor-pointer" onClick={() => addItems(item)}>+</button>
                    </div>
                    </span>
                </div>
                </div>
                );
            })
    )

    
    
}

export default Cart;