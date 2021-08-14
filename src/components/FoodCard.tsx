import React from 'react';

type prop = {
    food:string,
    description:string,
    imgSrc:string,

}

function FoodCard(prop:prop):JSX.Element{
    const {food, description, imgSrc} = prop;
    return(
        <div>
            <h1>음식이름 : {food}</h1>
            <div>{description}</div>
            <img src={imgSrc}></img>
        </div>
    )
}

export default FoodCard;