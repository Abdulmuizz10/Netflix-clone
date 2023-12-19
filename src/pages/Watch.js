import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Watch = () => {
  return (
    <Container>
      <Back>
        <ArrowBack className="icon" />
        <Link to="/home">
          <h2>Home</h2>
        </Link>
      </Back>
      <video src="/img/video.mp4" controls autoPlay />
    </Container>
  );
};

export default Watch;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: white;

  video {
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
`;

const Back = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 999;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 1px;
    font-size: 20px;
  }

  h2 {
    color: white;
    font-size: 15px;
  }
`;
