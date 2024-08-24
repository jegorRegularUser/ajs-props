import { useState } from "react";
import "../../App.css";
import Stars from "./Stars";
import * as React from "react";



function Films() {

  
  return (
    <div>
    <Stars count={3}></Stars>
    <Stars count={5}></Stars>
    <Stars count={2}></Stars>
    <Stars count={12}></Stars>
    <Stars count={1}></Stars>
    </div>
  );
}

export default Films;
