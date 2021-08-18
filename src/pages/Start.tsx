import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button"
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center', 
        height: '100vh',
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

function StartPage(){
    const classes = useStyles();
     return (
        <div className={classes.root}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <h1 style={{color:"white"}}>나의 음식 찾기</h1>
                <div><Link to="/qna/1"><button className={classes.button}>시 작 하 기</button></Link></div>
            </Grid>
        </div>
     )
    
}

export default StartPage;