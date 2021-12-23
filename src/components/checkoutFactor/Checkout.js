import { useCart } from "../../providers/CartProvider";
import "./Checkout.css";

function Checkout() {
  const { cart } = useCart();

  const sumPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : "0";
  return (
    <>
      <div className="table-container">
        <table>
          <tr>
            <th>نام سفارش</th>
            <th>تعداد</th>
            <th>قیمت</th>
          </tr>
          {cart
            ? cart.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.price}</td>
                  </tr>
                );
              })
            : ""}
          <tfoot style={{textAlign:"center"}}>
            <tr>
              <td>قیمت کل  : {sumPrice} تومان</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <button className="btn btn-primary buy-btn">پرداخت</button>
    </>
  );
}

export default Checkout;
