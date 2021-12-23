import { useCart, useCartActions } from "../../providers/CartProvider";
import "./Cart.css";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useAuth } from "../../providers/AuthProvider";

function Cart() {
  const isAuth=useAuth();
  const { cart } = useCart();
  const dispatch = useCartActions();

  const incToCart = (food) => {
    dispatch({ type: "ADD_TO_CART", payload: food });
  };
  const decFromCart = (food) => {
    dispatch({ type: "DEC_FROM_CART", payload: food });
  };

  const sumPrice = cart.length
  ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
  : "0";

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.length ? (
          cart.map((food) => {
            return (
              <div className="cart-item" key={food.id}>
                <div className="cart-content">
                  <p className="cart-name">{food.name}</p>
                  <p>{food.materials}</p>
                  <p>{food.gram} گرم</p>
                  <p className="cart-price">
                    {food.price * food.quantity} تومان
                  </p>
                </div>
                <div className="img-count">
                  <div className="imagee">
                    <img src={food.img} alt={food.name} />
                  </div>
                  <div className="counter">
                    <button
                      onClick={() => incToCart(food)}
                      className="btn-primary"
                    >
                      <AiOutlinePlus />
                    </button>
                    <span>{food.quantity}</span>
                    <button
                      onClick={() => decFromCart(food)}
                      className="btn-primary"
                    >
                      {food.quantity === 1 ? <BiTrash /> : <AiOutlineMinus />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty">
            <p> ليست سفارشات شما خالي است ... </p>
            <p>
              {" "}
              <Link to="/menu">مشاهده منو </Link>{" "}
            </p>
          </div>
        )}
      </div>
      <div className="cart-summary">
        <p>سفارشات</p>
        <hr />
        <p>قيمت كل : {sumPrice} تومان</p>
        <p>تخفيف : 0 </p>
        <p> قيمت پرداختي : {sumPrice} تومان </p>
        <Link to={isAuth?"/checkout" : "/enterData"}>
          <button className="checkout-btn">ادامه سفارش</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
