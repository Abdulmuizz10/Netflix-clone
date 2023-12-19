import React, { useRef, useState } from "react";
import ListItems from "./ListItems";
import styled from "styled-components";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import img7 from "../assets/img7.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img13 from "../assets/img13.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";

const List = ({ sectionTitle }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const [limit, setLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();

  const handleClick = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - limit) {
      setIsMoved(true);
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <Container>
      <h3>{sectionTitle}</h3>
      <Wrapper>
        {isMoved && (
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
          />
        )}
        <Wrap className="holder" ref={listRef}>
          <ListItems img={img7} index={0} />
          <ListItems img={img2} index={1} />
          <ListItems img={img3} index={2} />
          <ListItems img={img4} index={3} />
          <ListItems img={img5} index={4} />
          <ListItems img={img6} index={5} />
          <ListItems img={img13} index={6} />
          <ListItems img={img8} index={7} />
          <ListItems img={img9} index={8} />
          <ListItems img={img10} index={9} />
        </Wrap>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </Wrapper>
    </Container>
  );
};

export default List;

const Container = styled.div`
  width: 100%;
  margin: 20px 30px 30px 0;

  h3 {
    padding: 0 0 20px;
    margin-left: 50px;
    font-weight: 500;
  }
`;

const Wrapper = styled.div`
  position: relative;

  .sliderArrow {
    height: 100%;
    width: 50px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    font-size: 10px;
    color: lightgray;

    &.left {
      position: absolute;
      left: 0;
    }

    &.right {
      position: absolute;
      right: 0;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  width: max-content;
  transition: 1s ease;
  transform: translateX(0px);
  margin-left: 50px;
`;
