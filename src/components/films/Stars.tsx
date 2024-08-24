import * as React from "react";

import "../../App.css";
import Star from "./Star";


function Stars(props:{count:number}) {
  const stars =  Array(props.count).fill('').map((_, index) => (
    <Star key={index} />
  )) 
  return (
    <ul className={props.count<=5 && props.count>0 ? 'card-body-stars u-clearfix': 'no-display'} >
    {stars}
    </ul>
);
}

export default Stars;
Stars.defaultProps = {
  count: 0
  };