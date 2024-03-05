import { CDN_URL } from "../utils/constants";
const RestCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cloudinaryImageId, cuisines, sla } = resData?.info;
  return (
    <div className="restcard">
      <img src={CDN_URL + cloudinaryImageId} alt="imgcard"></img>
      <div className="details">
        <h4>{name}</h4>
        <h4>{cuisines.join(",")}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

export default RestCard;