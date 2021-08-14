import * as React from "react";
import FoodCard from "../components/FoodCard";
import Foods from '../data/food.json'

function Results(){
    const _foods = Foods["data"];
    const {number, name, description, link, good_food_number, bad_food_number} = _foods[1];

    return(
        <div>
            <FoodCard food={name} description={description} imgSrc={link}/>
        </div>

    )
}

export default Results;