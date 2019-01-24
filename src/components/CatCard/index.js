import React from "react";
import "./style.css";

function CatCard(props){
    return(
        <div className="image col-md-3" onClick={()=>props.clickedCat(props.id)}>
                <img className='img-thumbnail' alt={props.name} src={props.image} />
        </div>
    );
};

export default CatCard;
