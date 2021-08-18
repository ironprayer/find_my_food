import { Card, CardActionArea, CardActions, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { totalScoreState } from '../recoil/score';
import { questionNumberState} from '../recoil/questionNumber'

type prop = {
    questionNumber:number,
    answer:string,
    score:number,
}

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign:"center",
      height:40,
      marginBottom:10,
      alignItems:'center' 
    }
})

function AnswerCard(prop:prop):JSX.Element{
    const {questionNumber, answer, score} = prop;
    const history = useHistory();
    const [totalScore, setScore] = useRecoilState(totalScoreState);
    const [_, setQuestionNumber] = useRecoilState(questionNumberState);
    const classes = useStyles();

    const handleAnswerButtonClick = (score:number) => {
        const nextQuestionNumber = questionNumber + 2;
        setScore(totalScore + score);
        setQuestionNumber(questionNumber);
        history.push(`/qna/${nextQuestionNumber}`)
    }    

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea style={{height:"100%"}} onClick={handleAnswerButtonClick.bind(undefined, score)}>{answer}</CardActionArea>
        </Card>
    )
}

export default AnswerCard;