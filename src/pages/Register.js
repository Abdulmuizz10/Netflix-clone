import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const handleEmail = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
    history.push("/login");
  };
  return (
    <Container>
      <header>
        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <button>
          <Link to="/login" style={{ color: "#fff" }}>
            Sign In
          </Link>
        </button>
      </header>
      <Wrap>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              placeholder="email@gmail.com"
              required
              ref={emailRef}
            />
            <button onClick={handleEmail}>Get Started</button>
          </div>
        ) : (
          <form className="input">
            <input
              type="password"
              placeholder="password"
              required
              ref={passwordRef}
            />
            <button onClick={handleFinish}>Sign In</button>
          </form>
        )}
      </Wrap>
    </Container>
  );
};

export default Register;

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
    z-index: 1000;
    .logo {
      img {
        width: 130px;
      }
    }

    button {
      padding: 10px 25px;
      background: red;
      border: none;
      color: white;
      border-radius: 5px;
      font-size: 1.3rem;
      cursor: pointer;
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
  text-align: center;

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 20px;
    margin: 20px;
  }

  p {
    font-size: 1.3rem;
  }

  .input {
    margin-top: 20px;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    height: 50px;

    @media (max-width: 768px) {
      width: 80%;
    }

    input {
      flex: 9;
      border: none;
      height: 100%;
      outline: none;
      padding: 0 10px;
      width: 100%;
      font-size: 1.2rem;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }

    button {
      height: 100%;
      flex: 3;
      background: red;
      border: none;
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
    }
  }
`;
