// reusable component
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Shimmerui from "./Shimmerui";
import { MENU_URL } from "../utils/constants";
import NoMenu from "./NoMenu";
const ResMenu = () => {
    const [resMenu,setresMenu] = useState(null);
    const {resid} = useParams();
    console.log("resid", resid);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        
        const data = await fetch(MENU_URL+resid);
        const json = await data.json();
        console.log("json", json);
        setresMenu(json.data);   
    } 
            if (resMenu === null) {
        return <Shimmerui />;
    }
        const { name,avgRating,costForTwoMessage,cuisines } = resMenu.cards[0].card.card.info;
    // const { itemCards } = json?.data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    const itemCards = resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    console.log("itemcards", itemCards);
    if (!itemCards) {
        return <NoMenu />;
    }
    return (
        <div>
            <div>
                <div className="resDetails">
                <h1>{name}</h1>
                <h2>{costForTwoMessage}</h2>
                <h2>{ avgRating }</h2>
                <h3>{cuisines.join(', ')}</h3>
                </div>
                <div>
                    <ul className="menu-items">
                        {
                            itemCards.map((item) => (
                                <li key={item.card.info.id}>{item.card.info.name} {"Rs: "}  {item.card.info.price / 100 || item.card.info.defaultPrice/100} </li>  
                        )
                        )}
                </ul>    
              </div>
              
        </div>
        </div>
        
    )
}
export default ResMenu;