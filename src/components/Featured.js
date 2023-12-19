import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import img8 from "../assets/img8.jpg";
import movieinfo from "../infoimg.png";

const Featured = () => {
  return (
    <Wrap>
      <img src={img8} alt="" />
      <Info>
        <MovieInfo src={movieinfo} />
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            exercitationem porro at fugit repellat perspiciatis nemo et harum
            quas, mollitia quod, quibusdam, eos sequi doloribus reprehenderit
            aut quasi iusto laudantium!
          </p>
        </div>
        <div className="buttons">
          <button>
            <PlayArrow className="i" />
            Play
          </button>
          <button className="second">
            <InfoOutlined className="i" />
            info
          </button>
        </div>
      </Info>
    </Wrap>
  );
};

export default Featured;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 85vh;
  // background: url("/img/miles.jpg");
  // background-size: cover;
  // background-position: center;
  // position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 55%;
  bottom: 100px;
  left: 50px;

  .description {
    width: 40vw;
    @media (max-width: 768px) {
      width: 60vw;
    }

    p {
      line-height: 20px;
      font-size: 17px;
      margin: 0 0 15px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 15px;
      }
    }
  }

  .buttons {
    display: flex;

    button {
      padding: 10px 15px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      border: none;
      font-size: 21px;
      cursor: pointer;

      .i {
        font-size: 25px;
        margin-right: 5px;
      }
    }

    .second {
      background: gray;
      color: #fff;
    }
  }
`;

const MovieInfo = styled.img`
  margin-top: -140px;
  display: none;
  width: 100%;
  @media (min-width: 1200px) {
    display: block;
  }
`;
