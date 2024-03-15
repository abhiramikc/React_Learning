import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestarentCategoryAccordianDescription = ({ items }) => {
  const dispatch = useDispatch();

  const handleCart= (itemselected) => {
    //add to cart logic
    dispatch(addItems(itemselected));
    //console.log("add to cart:", itemselected);
  }
  return (
 <div>
    {items.map((item) => (
     <div key={item.card.info.id} className="item-cards">
      <div className="item-content">
        <div className="item-details">
          <div className="item-name">{item.card.info.name}</div>
          <div className="item-price">Price: {item.card.info.price / 100 | item.card.info.defaultPrice/100}</div>
        </div>
          <div className="item-image">
            <button className="btn-add"type="button" onClick={()=>handleCart(item)}>Add</button>
            <img src={CDN_URL + item.card.info.imageId} alt="imgcard" />
        </div>
      </div>
    </div>
    ))}
</div>
  );
};

export default RestarentCategoryAccordianDescription;
