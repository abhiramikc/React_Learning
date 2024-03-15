import RestarentCategoryAccordianDescription from "./RestarentCategoryAccordianDescription";
import { useState } from "react";
const RestarentCategoryAccordian = ({ menuitem,hideAccordian,setShowIndex }) => {
  console.log("menuitem",menuitem);
  // const individualMenu = menuitem.menuitem.card?.card?.itemCards
  // const [hideAccordian, setHideAccordian] = useState(false);

  const handleAccordian = () => {
    // setHideAccordian(!hideAccordian);
    setShowIndex();
  };

  return (
    <div className="accordian">
      <div className="accordian-title">
        <div>
          {menuitem.title} ({menuitem.itemCards.length})
        </div>
        <button className="btn-plus" onClick={handleAccordian}>
          ➕
        </button>
      </div>

      <div className="accordian-description">
        {hideAccordian && (
          <RestarentCategoryAccordianDescription
            key={menuitem.title}
            items={menuitem.itemCards}
          />
        )}
        <div></div>
      </div>
    </div>
  );
};
export default RestarentCategoryAccordian;
