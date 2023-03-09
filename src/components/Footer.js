import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { Button } from '../styles/Button'
import { FaInstagram, FaLinkedinIn, FaDiscord } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to="/contact">
              <Button >Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <footer style={{ backgroundColor: "#363434" }}>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <p style={{ fontWeight: "bold", color: "white" }}>Sumit Prasad</p>
            <p style={{ fontWeight: "bold", color: "white" }}>Btech in computer science and engineering</p>
          </div>
          <div className='footer-subscribe'>
            <p style={{ color: "white" }}>subscribe to get important details</p>
            <form>
              <input type="email" autoComplete='off' method="post" placeholder='your email' />
              <input type="submit" value="submit" />
            </form>

          </div>
          <div className='footer-social'>
            <p style={{ color: "rgb(255 255 255)" }}>follow us</p>
            <div className='footer-social--icons'>
              <NavLink to="#">
                <FaInstagram className='footer-social--icons' size={25} style={{ color: "rgb(255 255 255)" }} />
              </NavLink>
              <NavLink to="#">
                <FaLinkedinIn className='footer-social--icons' size={25} style={{ color: "rgb(255 255 255)" }} />
              </NavLink>
              <NavLink to="#">
                <FaDiscord className='footer-social--icons' size={25} style={{ color: "rgb(255 255 255)" }} />
              </NavLink>
            </div>
          </div>
          <div>
            <p style={{ color: "rgb(255 255 255)" }}>Call Us </p>
            <p style={{ color: "rgb(255 255 255)" }}>+917063278992</p>
          </div>
        </div>
        <div className='footer-bottom--section'>
          <hr />
          <p style={{ color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}> @{new Date().getFullYear()} copyright to Sumit Prasad</p>
        </div>
      </footer>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;


export default Footer
