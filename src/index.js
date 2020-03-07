import React from "react";
import "./index.scss";
import "./index.css";
import BigImage from "../assets/1.jpg";
import SmallImage from "../assets/3.jpg";
if(module && module.hot) module.hot.accept()
const App = () => {
  // setTimeout(()=>{
  //     System.import('../assets/1.jpg')
  // },5000)

  console.log("Running this component!");
  return <h1>Hello World!</h1>;
};

const as = ReactComponent => {
  console.log("Hello Worlddddddddddd!");
 // alert("Updated Code here for debugging");
 alert(process.env.NODE_ENV)
 document.querySelector("body").innerHTML="Hello S WDODRLFDDD"

  fetch("server/products")
    .then(response => response.json())
    .then(json => console.log(json));

  consolde.log(ReactComponent);
};



as(App);
