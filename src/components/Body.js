import RestCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
let restaurents=[
    {
        info: {
          id: "233804",
          name: "KFC",
          cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
          locality: "MG Road",
          areaName: "Ravipuram",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          avgRating: 4.6,
          parentId: "547",
          avgRatingString: "4.6",
          totalRatingsString: "5K+",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-02-26 23:00:00",
            opened: true,
          },
          
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
         
        },
      
      },
      {
        info: {
          id: "57445",
          name: "Subway",
          cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
          locality: "Panampilly Nagar",
          areaName: "Elamkulam",
          costForTwo: "₹350 for two",
          cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
          avgRating: 4.3,
          parentId: "2",
          avgRatingString: "4.3",
          totalRatingsString: "10K+",
          sla: {
            deliveryTime: 36,
            lastMileTravel: 7.9,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },

   
       
        },
      
      },
]
let [listRes,setListRes] = useState(resList);
console.log(listRes);
    return (
      <div>
        <div className="searchBar">
        <input type="text" placeholder="Search" onChange={($event)=>{
            const searchTerm = $event.target.value;
            // const searchresult = listRes.info.cuisines.filter((res) => {
            //     res.startWith($event.target.value)
            // })
            console.log("search searchTerm",searchTerm);
        }}/>
        </div>
        <div className="filter">
        <button className="filter-btn" onClick={() => {
            const filteredList = listRes.filter(
                (resto)=> resto.info.avgRating > 4.5
                );
            // console.log("restaurents",filteredList);
            setListRes(filteredList)
            // console.log("listRes after click",listRes);
        }
        
        }>
            Top Rated RESTAURANT</button>
        </div>
        <div className="card-container">
        {
          listRes.map((restarent) => 
          (
            <RestCard key={restarent.info.id} resData = {restarent} />
           ) )
        }
        </div>
      </div>
    );
  };

  export default Body;