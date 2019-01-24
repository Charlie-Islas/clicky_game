import React from "react";
import "./style.css";

function Banner(props){
    return(
        <div className='text-center banner'>
        <h1>Welcome to the clicky cat game</h1>
        <h2>Click on a feline to earn points, but don't click on any image more than once!</h2>
        </div>);
};

export default Banner;