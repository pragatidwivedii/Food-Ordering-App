import ResturantCard , {AvailableResturantCard , ClosedResturantCard} from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import OnlineStatus from "./OnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MOCK_MENUS, MOCK_RES } from "../utils/constant";

const Body = () => {
    // let [ListOfResturant, setFilteredResList] = useState(RES_LIST); // USESTATE hook
    const [ListOfResturant, setListOfResturant] = useState([]);
    const [FilteredList, setFilteredList] = useState([""]);
    const [searchText , setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    } , []);

  
    const fetchData = async () => {
        const data = MOCK_RES;
        
        setListOfResturant(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlinestatus = useOnlineStatus();
    const AvailableResturantCardComponent = AvailableResturantCard(ResturantCard);
    const ClosedResturantCardComponent = ClosedResturantCard(ResturantCard);

   
    // ***filtering the restaurants based on rating and setting the filtered list to state variable and creating search functionality***
    // ***conditional rendering***
    if(FilteredList.length === 0){
        return (
            <div className="Body">
                <h1 style={{color:"#555151" , padding: "20px"}}>NO Result Found for {searchText}</h1> 
            </div>
        );
    }
    return (ListOfResturant.length === 0 ) ? (<div className = "Body"> <Shimmer /> </div>) : (<div className="mx-20 mt-5 ">
        <div className="flex justify-between mb-4">
            <div className="m-2 border-2 rounded-2xl px-2 bg-orange-400 text-white font-bold">
                <button className="btn" onClick= {() => {
                    const filteredList = ListOfResturant.filter((res) => {
                        return (res.info.avgRating > 4.3);
                    })
                    setFilteredList(filteredList);
                }}> Top Rated Restaurants </button>
            </div>
            <div className="m-2 border-2 rounded-2xl ">
                <input className="mr-1 w-60 rounded-2xl p-2" type = "text" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => {
                    setsearchText(e.target.value);
                }}/>
                <button className=" border-2 rounded-2xl px-2 bg-orange-400 text-white font-bold" onClick={() => {
                    const list = ListOfResturant.filter((res) => {
                        const cuisines = res.info.cuisines.join(",").toLowerCase();
                        const name = res.info.name.toLowerCase();
                        const search = searchText.toLowerCase();
                        // console.log(cuisines);
                        return (name == search  || cuisines.includes(search) || name.includes(search));
                    });
                    setFilteredList(list);
                }}>
                    SEARCH
                </button>
            </div>
        </div>

    {/* rendering the list of restaurants using map function and passing the restaurant data as props to ResturantCard component */}

        <div className="flex flex-wrap justify-center">
            {FilteredList.map((res) => {
                // {console.log(res.info.id , '-' , res.info.name)}
                return <Link id = "menuLink" key = {res.info.id} to = {"/restaurants/" + res.info.id}>
                    {res.info.availability.opened === true ? <AvailableResturantCardComponent resData = {res} key = {res.info.data}/> : <ClosedResturantCardComponent resData = {res} key = {res.info.id}/>}
                    {/* <ResturantCard resData = {res} key = {res.info.id}/> */}
                </Link>
            })}
        </div>    
    </div>);
}

export default Body;