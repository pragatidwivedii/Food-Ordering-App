import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import {Link} from "react-router";
import {useSelector} from "react-redux";

const Header = () => {
    const [value , setvalue] = useState("LOGIN");
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    return (
        <div className="flex justify-between  border-2 m-1 p-1 px-2 ">
                <img  className= "w-20 h-20" src = {LOGO_URL} />
                <div className="flex ">
                    <ul className="flex items-center">
                    <li className="mx-5 font-bold text-xl"><Link to="/" >Home</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/about" >About Us</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/contact" >Contact Us</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/grocery">Grocery</Link></li>
                    <li className="mx-2 font-bold text-3xl"><Link to="/cart"> <div className="relative inline-block">
                                        {/* cart icon */}
                                        <span className="text-3xl">🛒</span>

                                        {/* badge */}
                                        {cartItems.length > 0 && (
                                        <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                        {cartItems.length}
                                        </span>
                                 )}
                    </div></Link></li>
                   
                    <button className = " border-2 rounded-2xl px-2 ml-2 text-lg bg-orange-400 text-white font-bold" onClick={()=> {
                        if(value === "LOGIN"){
                            setvalue("LOGOUT");
                        }
                        else{
                            setvalue("LOGIN");
                        }
                    }}>{value}</button>
                </ul>
                </div>     
        </div>
    );
}

export default Header;