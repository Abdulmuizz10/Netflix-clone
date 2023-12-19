import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListItems = ({ img, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = "/img/video.mp4";
  return (
    <Wrap
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
    >
      <img src={img} alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop muted />
          <Information>
            <div className="icons">
              <Link to="/watch">
                <PlayArrow className="icon" />
              </Link>
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="info-top">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias adipisci quasi repudiandae,.
            </div>
            <div className="genre">Action</div>
          </Information>
        </>
      )}
    </Wrap>
  );
};

export default ListItems;

const Wrap = styled.div`
  width: 225px;
  height: 120px;
  margin-left: 5px;
  cursor: pointer;
  overflow: hidden;
  background: #0b0b0b;
  -web-kit-box-shadow: 0px -2px 15px 0px rgba(255, 255, 255, 0.07);
  box-shadow: 0px -2px 15px 0px rgba(255, 255, 255, 0.07);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    height: 140px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    object-fit: cover;
  }

  &:hover {
    position: absolute;
    top: -140px;
    width: 325px;
    height: 300px;
    border-radius: 5px;

    img {
      height: 140px;
    }
  }
`;

const Information = styled.div`
  padding: 10px;

  .icons {
    .icon {
      font-size: 30px;
      color: #fff;
      transition: 0.2s ease;
      border: 2px solid #fff;
      border-radius: 50%;
      margin-right: 7px;
      padding: 5px;

      &:hover {
        transform: scale(1.01);
      }
    }
  }

  .info-top {
    margin: 5px 0;

    span {
      font-size: 15px;
      margin-right: 5px;
      opacity: 0.5;
    }

    .limit {
      border: 2px solid wheat;
      padding: 2px;
    }
  }

  .desc {
    font-size: 15px;
    line-height: 20px;
  }

  .genre {
    opacity: 0.5;
    font-size: 15px;
    margin: 5px 0;
  }
`;
