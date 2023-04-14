import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {

  const {isAuthenticated , user } = useAuth0() ;

  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Feel free to contact us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.334193197729!2d89.37780681450101!3d26.861121368776825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3cb3e1b103d91%3A0x82d28b85b9c723fd!2sJaigaon%2C%20West%20Bengal%20735182!5e0!3m2!1sen!2sin!4v1677842064646!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form ">
        <form method="post" action="https://formspree.io/f/xzbqgjzl" className="contact-inputs">
          <input type="text" placeholder="username"
            autocomplete="off" required name="username"
            value = {isAuthenticated ? user.name : ""} />
          <br />
          <input type="email" placeholder="email"
            autocomplete="off" required name="Email"
            value = {isAuthenticated ? user.email : ""} />
          <br />
          <textarea placeholder="message" rows="20"
            autocomplete="off" required name="Message" />
          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
