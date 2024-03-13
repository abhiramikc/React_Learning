import { CDN_URL } from "../utils/constants";
const RestarentCategoryAccordianDescription = ({ items }) => {
  console.log("items", items);
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
            <button className="btn-add"type="button">Add</button>
            <img src={CDN_URL + item.card.info.imageId} alt="imgcard" />
        </div>
      </div>
    </div>
    ))}
</div>
  );
};

export default RestarentCategoryAccordianDescription;
