import React from 'react'
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
const Star = ({ stars, reviews }) => {


    //  read more about the following function from the given link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    const ratingStart = Array.from({length : 5}, (_, i) => {
        // this function will create and array of length 5 with the function we specify in the callback function
        let number = i + 0.5;
        return <span key={i}>
            {
                stars >= i + 1 ? (<FaStar className='icon' /> ) : 
                stars >= number ? (<FaStarHalfAlt className='icon' />) :
                <AiOutlineStar className='icon' />
            }
        </span>
    });
    return (
        <Wrapper>
            <div className='icon-style' >
                {ratingStart} 
                <p> {reviews} customer reviews</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;


export default Star
