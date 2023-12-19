import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <Container>
      <header>
        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>
      </header>
      <Wrap>
        <div className="card">
          <h1>Sign In</h1>
          <input type="text" placeholder="Email or Phone number" />
          <input type="password" placeholder="password" />
          <button onClick={handleClick}>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <span>
            This page is protected by GOOGle reCAPTCHA TO ensure you're not a
            bot <b>Learn more.</b>
          </span>
        </div>
      </Wrap>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1)),
    url("/img/netflixbg.jpg");
  background-position: center;
  background-size: cover;
  header {
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      img {
        width: 130px;
      }
    }
  }
`;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 30px;
    background: var(--main-color);
    width: 450px;
    border-radius: 10px;

    h1 {
      font-size: 2.5rem;
    }
    input {
      padding: 13px 5px;
      border-radius: 5px;
      background: gray;
      font-size: 1rem;
      color: #fff;

      &::placeholder {
        color: lightgray;
      }
    }

    button {
      background: red;
      border: none;
      color: #fff;
      padding: 13px 0;
      border-radius: 5px;
      font-size: 1.1rem;
      cursor: pointer;
    }
  }
`;
