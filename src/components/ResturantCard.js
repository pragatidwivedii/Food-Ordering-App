import { CDN_URL } from "../utils/constant";
import { Link } from "react-router";

const ResturantCard = (props) => {
    const {resData} = props ;
    const {name, cuisines, avgRating, totalRatingsString, locality, areaName, cloudinaryImageId} = resData.info;
    return(<div className="hover:bg-gray-300 w-[250px] p-1 m-2 rounded-2xl bg-gray-100"> 
        <div className="rounded-2xl w-[240px] h-[270px] bg-gray-300"><img className="rounded-2xl w-[240px] h-[270px] font-bold " src = {CDN_URL + cloudinaryImageId}/></div>
        <h4 className="font-bold text-xl text-gray-800 mt-2">{name}</h4>
        <h5 className="text-gray-600">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-600">{avgRating} Stars {'('+ totalRatingsString + 'ratings)'}</h5>
        <h5 className="text-gray-600">{resData.info.sla.lastMileTravelString + ' - ' + locality +' ' + areaName}</h5>
    </div>)
}

export const AvailableResturantCard = (RestaurantCard) => {
    return ( (props) => {
        return (
            <div className="relative">
            <RestaurantCard {...props} />
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-md">
                <span className="font-bold">Open</span>
            </div>
        </div>
        )
    })
}

export const ClosedResturantCard = (RestaurantCard) => {
    return ( (props) => {
        const {resData} = props ;
        return (
            <div className="relative">
            <RestaurantCard {...props} />
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md">
                {/* <span className="font-bold">Closed</span> */}
                 <span className="font-bold">{resData.info.availability.nextOpenTimeMessage}</span>

            </div>
        </div>
        )
    })
}

export default ResturantCard;