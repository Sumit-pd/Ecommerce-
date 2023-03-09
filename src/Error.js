import React from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { Button } from './styles/Button'

const Error = () => {
  return (
    <Wrapper >
      <div className='container'>
        <div>
          <h1 className='center'>404</h1>
          <h3 className='center' >UH OH! You're lost </h3>
          <p>The page your are looking for does not exist. How you got here is a mystery. but you can click the button below to go back to Home page</p>
          <NavLink to="/">
            <Button> Go to Home </Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Error
