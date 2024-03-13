// reusable component
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";
import { MENU_URL } from "../utils/constants";
import RestarentCategoryAccordian from "./RestarentCategoryAccordian";
import useResMenu from "../utils/useResMenu";
import NoMenu from "./NoMenu";
import useStatusCheck from "../utils/useStatusCheck";

const ResMenu = () => {
  //const [resMenu,setresMenu] = useState(null);
  const { resid } = useParams();
  const [hideAccordian, setHideAccordian] = useState(false);
  //custom hook
  const resMenu = useResMenu(resid);

  const handleAccordian = () => {
    //logic
    //("hideAccordian", hideAccordian);
    setHideAccordian(!hideAccordian);
  };

  const onlinecheck = useStatusCheck();
  if (!onlinecheck) {
    return <h1>You are offline check internet!</h1>;
  }
  if (resMenu === null) {
    return <Shimmerui />;
  }
  const { name, avgRating, costForTwoMessage, cuisines } =
    resMenu.cards[0].card.card.info;
  const itemCards =
    resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  let menusection = resMenu.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
    c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log("menusection", menusection);
  if (!itemCards) {
    return <NoMenu />;
  }
  return (
    <div>
      <div>
{/* 
        {
          menusection.map((item) => (
     <div className="accordian">
          <div className="accordian-title">
            <div>{item.card.card.title}</div>
            <button className="btn-plus" onClick={handleAccordian}>
              ➕
            </button>
          </div>
              <div className="accordian-description">
              
                {hideAccordian && (
              <div>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
              </div>
            )}
          </div>
        </div>
          ))
        } */}
   

        <div className="resDetails">
          <div className="name-res">{name}</div>
          <div className="res-details cost-for-two">{costForTwoMessage}</div>
          <div className="res-details rating">Rating: {avgRating}</div>
          <div className="res-details cuisines">{cuisines.join(", ")}</div>
        </div>
        <div className="menu">
          <ul className="menu-items">
            {menusection.map((item) => (
              <RestarentCategoryAccordian key={item.card.card.title} menuitem={item.card.card} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ResMenu;
