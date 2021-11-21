import React from 'react'
import {FaStar} from 'react-icons/fa'

const Star = ({ selected = false}) => (
  <FaStar color={selected ? "red" : "grey"} />
);

function Chapter4({totalStars = 5}) {

  return (
    <div>
      chapter4
      {[...Array(totalStars)].map((_, i) => <Star key={i} />)}
    </div>
  )
}

export default Chapter4
