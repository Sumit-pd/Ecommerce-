import { NavLink } from "react-router-dom"
import { Button } from "../styles/Button"
import styled from "styled-components"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import CartAmountToggle from "./CartAmountToggle" // for the changing of amount of product value 
const AddToCart = ({ details }) => {
    const {
        id: sumit, // we are doing this because there is already a id available
        colors,
        stock,

    } = details


    const [color, setColor] = useState(colors[0]);
    //initializing the color state with 0th index will lead to highlighting of the first color of the colors arraylist available

    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock); // this will ensure that the value do not go above the stock
    }

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1); // this will ensure that the amount do not go below 1
    }


    return (
        <Wrapper>

            <div className="colors">
                <p>
                    Colors :
                    {
                        colors.map((curColor, index) => {
                            return (
                                <button key={index}
                                    style={{ backgroundColor: `${curColor}` }}
                                    className={curColor === color ? "btnStyle active" : "btnStyle"
                                    }
                                    onClick={(e) => {
                                        setColor(curColor)
                                    }}
                                >
                                    {curColor === color && <FaCheck className="checkStyle" />}
                                </button>)
                        })
                    }
                </p>
            </div>
            {/* add to cart section  */}
            <CartAmountToggle
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease} />

            <NavLink to="/cart" >
                <Button className="btn"> Add to cart</Button>
            </NavLink>

        </Wrapper>
    )
}

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
export default AddToCart
