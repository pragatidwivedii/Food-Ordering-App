import {LOGO_URL} from "../utils/constant";
import {useState} from "react";
import {Link} from "react-router";

const Header = () => {
    const [value , setvalue] = useState("LOGIN");
    return (
        <div className="flex justify-between  border-2 m-1 p-1 px-2 ">
                <img  className= "w-20 h-20" src = {LOGO_URL} />
                <div className="flex ">
                    <ul className="flex items-center">
                    <li className="mx-5 font-bold text-xl"><Link to="/" >Home</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/about" >About Us</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/contact" >Contact Us</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/cart">Cart</Link></li>
                    <li className="mx-5 font-bold text-xl"><Link to="/grocery">Grocery</Link></li>
                    <button className = " border-2 rounded-2xl px-2 text-lg bg-orange-400 text-white font-bold" onClick={()=> {
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