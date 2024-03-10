import { Link } from "react-router-dom";
import RestCard from "./ResCard";
import Shimmerui from "./Shimmerui";
import { useEffect, useState } from "react";
import useStatusCheck from "../utils/useStatusCheck";
const Body = () => {
  const [listRes, setListRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  //for search functionslity inside the body
  const [filetredRestarent, setfiletredRestarent] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const handleScroll = () => {
    console.log("handle scroll called!");
    setisLoading(true);
}
  useEffect(() => {
    console.log("useEffect");
    fetchData();
    document.addEventListener('scroll', handleScroll);
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);
    const actual =
      json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListRes(actual);
    setfiletredRestarent(actual); //take copy of it and save it on filetredRestarent
  };
   const onlinecheck = useStatusCheck();
    if (!onlinecheck) {
        return <h1>You are offline check internet!</h1>
    }
  if (listRes.length === 0) {
    return <Shimmerui />;
  }
  const searchFunction = () => {
    console.log("Searching...", searchText);
    if(searchText.length >0){
      const filteredByName = listRes.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
      ); 
        // setListRes(filteredByName);
    if (filteredByName.length > 0) {
          setfiletredRestarent(filteredByName);
    }
    else {
       setListRes(listRes);
    }
        console.log("LisRes after filter", filteredByName);
    }
    else {
             setfiletredRestarent(listRes);
    }
   
  

  };

  const filterTopRatedRes = () => {
    console.log("filter clicked");
       const filteredList = listRes.filter(
                (resto) => resto.info.avgRating > 4.5
              );
    setfiletredRestarent(filteredList);

  }

  return (
    <div>
      <div className="filter-search-container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              searchFunction();
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() =>
            {
              filterTopRatedRes();
              // const filteredList = listRes.filter(
              //   (resto) => resto.info.avgRating > 4.5
              // );
              // setListRes(filteredList);
            }
            }
          >
            Top Rated RESTAURANT
          </button>
        </div>
      </div>

      <div className="card-container">
        {filetredRestarent.map((restarent) => (
         <Link key={restarent.info.id}  to={"/restaurent/"+restarent.info.id}><RestCard resData={restarent} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
