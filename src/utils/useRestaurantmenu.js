import { useEffect, useState } from "react";
import { MOCK_MENUS } from "./constant";

const useRestaurantmenu = (resId) => {
    const [Resdata , setResdata] = useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        
        const mock = MOCK_MENUS[resId];

        if(mock == undefined){
            setResdata(false);
        }
        else{
            setResdata(mock);
        }
    }

    return Resdata;
}

export default useRestaurantmenu;