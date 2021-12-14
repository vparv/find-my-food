import React, { useEffect, useState } from "react";
import { useSprings } from "react-spring/hooks";
import { useGesture } from "react-with-gesture";
import Card from "./Card";
import axios from 'axios'
import Deck from "./Deck";

import "../styles/Deck.css";

let objs = []


const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r /
    10}deg) rotateZ(${r}deg) scale(${s})`;

class Deck2 extends React.Component {
  render() {
    return (
      <Deck location = {this.props.location}/>
    )
  }
}

export default Deck2;
