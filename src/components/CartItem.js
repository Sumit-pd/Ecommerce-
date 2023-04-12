import FormatPrice from "../Helpers/FormatPrice"
import CartAmountToggle from "./CartAmountToggle"
import { FaTrash } from "react-icons/fa";


const CartItem = ({ id, name, color, amount, image, price }) => {
  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock); // this will ensure that the value do not go above the stock
  }

  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1); // this will ensure that the amount do not go below 1
  }

  return (
    <div className='cart-heading grid grid-five-column'>
      {/* image and other details  */}
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            Color :
            <div className="color-style" style={{ backgroundColor: color, color: color }} />
          </div>
        </div>
      </div>
      {/* price */}
      <div className="cart-hide">
        {/* we are writing this className because we need to hide this when the website is on mobile view */}
        <p><FormatPrice price={price} /></p>
      </div>
      {/* Quantity */}
      <div>
        <CartAmountToggle amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
      </div>
      {/* Subtotal */}
      <div className="cart-hide">
        <p><FormatPrice price={price * amount} /></p>
      </div>
      {/* delete item */}
      <div>
        <FaTrash className="remove-icon" size={20} style={{ color: "red" }} />
      </div>

    </div>
  )
}

export default CartItem
