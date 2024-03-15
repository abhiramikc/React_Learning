import { useSelector } from 'react-redux';
import RestarentCategoryAccordianDescription from "./RestarentCategoryAccordianDescription";
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.cart.items);
  console.log("items inside the cart page ", store);
  const clearCartmethod = () => {
    //clear
    dispatch(clearCart());
}
  return (
    <div>
      <h1>This is cart page</h1>
      <div>
        <button onClick={()=>clearCartmethod()}>Clear</button>
      </div>
      <RestarentCategoryAccordianDescription
        items={store}
          />    
    </div>
  );
};
export default Cart;
