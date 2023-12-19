import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, SetScrolled] = useState(true);
  const [rotate, setRotate] = useState(false);

  window.onscroll = () => {
    SetScrolled(window.pageYOffset === 0 ? true : false);
    return () => (window.onscroll = null);
  };

  return (
    <Container className={scrolled ? "container scrolled" : "container"}>
      <Navbar>
        <div className="left">
          <img src="/img/logo.png" alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kids</span>
          <Notifications className="icon" />
          <img src="/img/miles.jpg" alt="profile-pic" />
          <ArrowDropDown
            style={{ transform: rotate ? "rotate(180deg)" : "" }}
            className="icon"
            onClick={() => setRotate(!rotate)}
          />
          {rotate && (
            <div className="profile">
              <span>Settings</span>
              <Link to="/login" style={{ color: "#fff" }}>
                <span></span>Logout
              </Link>
            </div>
          )}
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 50px;
  z-index: 999;
  background: #0b0b0b;
  width: 100%;
  overflow: none;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
  // background: linear-gradient(to top, transparent 0%, rgba(0,0,0,0.3) 25%);

  &.scrolled {
    background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 50%);
  }
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  .left {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 100px;
      margin-right: 20px;
    }

    span {
      margin-right: 5px;
      cursor: pointer;

      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
    img {
      width: 35px;
      height: 35px;
      border-radius: 10px;
    }

    span {
      cursor: pointer;
    }

    .icon {
      cursor: pointer;
    }
    .profile {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      top: 38px;
      right: -19px;
      padding: 10px 8px;
      background: var(--main-color);
      border-radius: 10px;
      font-size: 0.9rem;
      z-index: 10001;
    }
  }
`;
