import { Box, Card, makeStyles } from '@material-ui/core';
import React from 'react';

type prop = {
    question:string;
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom:20,
      alignItems:'center' 
    }
})

function QuestionCard(prop:prop):JSX.Element{
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <h3 style={{textAlign:"center"}}>{prop.question}</h3>
        </Card>
    )
}

export default QuestionCard;