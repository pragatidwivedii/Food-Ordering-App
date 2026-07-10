const RestaurantTitle = (props) => {
    // Implementation for displaying restaurant title based on resId
    const { resdata } = props;
    // {console.log(resdata)}
    return  (resdata) ? 
     (
        <div className="flex justify-between m-2 p-2 w-6/12 bg-gray-100  items-center rounded-2xl">
            <span>
                <h1 className="font-bold text-2xl mb-2">{resdata?.name}</h1>
                <div className="mb-2">
                    {resdata?.cuisine.split(", ").map((cuisine) => {
                        return(<span key={cuisine} className="border-1 border-orange-400 text-orange-700 bg-orange-50 rounded-full px-2 mr-2 ">{cuisine}</span>)
                    })}
                </div>
                

                <h2 className="mb-2">📍 {resdata?.area}</h2>
                
               <h2 className="mb-2">💰 {resdata?.costForTwo}</h2>
            </span>
            <span className="p-2 text-center bg-white rounded-2xl">
                <h2 className="text-2xl">{resdata?.rating}  ⭐</h2>
                <h2 className="text-sm text-gray-500">ratings</h2>
            </span>
        </div>
    ) : (<div className="items-center rounded-2xl font-bold text-xl flex justify-center text-center">
            <img src="https://t4.ftcdn.net/jpg/20/77/76/87/360_F_2077768706_Ow83Xsz6dNlUxGmOukmTOkR5Ysul6Fng.jpg" className="h-[499px] w-[500px]"/>
            {/* Sorry, Menu Data is not available for this restaurant */}  
        </div>)
}

export default RestaurantTitle;