import * as React from "react";
import FoodCard from "../components/FoodCard";
import Foods from '../data/food.json'
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button"
import { useRecoilState } from "recoil";
import { totalScoreState } from "../recoil/score";
import SNS from "../components/SNS";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems:"center",
        justifyContent:"center",
        backgroundImage:`url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundSize:"cover"
      },
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        width: 300,
        height: 60,
        padding: '0 30px',
    }
})



function Results(){
    const _foods = Foods["data"];
    const [totalScore, _] = useRecoilState(totalScoreState);
    const resultNumber = totalScore % 2;
    const {number, name, description, link, good_food_number, bad_food_number} = _foods[resultNumber];
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <Grid container alignItems='center' justifyContent="center" direction="column" >
                <FoodCard food={name} description={description} imgSrc={link}/>
                <FoodCard food={name} description={description} imgSrc={link}/>
                <FoodCard food={name} description={description} imgSrc={link}/>
                <SNS/>
            </Grid>
        </div>

    )
}

export default Results;