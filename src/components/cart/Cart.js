import { useCart } from "../../providers/CartProvider";
import "./Cart.css";
import {Link} from 'react-router-dom'
function Cart() {
  const {cart} = useCart();
  console.log(cart)
  console.log(cart)
  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.length ?  cart.map((food) => {
          return (
            <div className="cart-item" key={food.id}>
              <div className="cart-content">
                <p className="cart-name">{food.name}</p>
                <p>{food.materials}</p>
                <p>{food.gram} گرم</p>
                <p className="cart-price">{food.price} تومان</p>
              </div>
              <div className="img-count">
                <div className="imagee">
                  <img src={food.img} />
                </div>
                <div className="counter">
                  <button className="btn-primary">+</button>
                  <span>{food.quantity}</span>
                  <button className="btn-primary">-</button>
                </div>
              </div>
            </div>
          );
        }) : <div className="empty">
                <p>  ليست سفارشات شما خالي است ...   </p>
                <p> <Link to="/menu">مشاهده منو </Link> </p>
            </div>}
      </div>
      <div className="cart-summary">
          <p>سفارشات</p> 
          <hr/>
          <p>قيمت كل : 880000 تومان</p>
          <p>تخفيف : 0 </p> 
          <p> قيمت پرداختي : 880000 تومان </p>
          <button className="checkout-btn" >ادامه سفارش</button>

      </div>
    </div>
  );
}

export default Cart;
