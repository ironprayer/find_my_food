import * as React from "react";
import FoodCard from "../components/FoodCard";
import Foods from '../data/food.json'
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
    root: {
        display: 'flex',  
        height: '100vh',
        backgroundImage:`url(${process.env.PUBLIC_URL + '/cool-background.png'})`
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
    const {number, name, description, link, good_food_number, bad_food_number} = _foods[1];
    const classes=useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={3} alignItems='center' justifyContent="center" direction="column" >
            <Grid>
                <FoodCard food={name} description={description} imgSrc={link}/>
            </Grid>
            <Grid>
                <FoodCard food={name} description={description} imgSrc={link}/>
            </Grid>
            </Grid>
        </div>

    )
}

export default Results;