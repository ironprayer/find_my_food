import * as React from 'react';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Questions from '../data/question.json'
import {totalScoreState} from '../recoil/score'
import QuestionCard from '../components/QuestionCard'
import AnswerCard from '../components/AnswerCard'
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button"

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


type PathParams = {
    index: string;
}

const END_QUESTION_INDEX = 3;

function Question(){
    const {index} = useParams<PathParams>();
    const questionNumber = Number(index) - 1;
    const _qnas = Questions["data"];
    const classes = useStyles();


    const isQuACompleted = questionNumber + 1 > END_QUESTION_INDEX
    if(isQuACompleted){
        return(
            <Redirect to="/result"></Redirect>   
        )
    }

    const {question, answer_one, answer_one_score, answer_two, answer_two_score} = _qnas[questionNumber]
    return (
            <div className={classes.root}>
                <QuestionCard question={question}/>
                <AnswerCard questionNumber={questionNumber} answer={answer_one} score={answer_one_score}/>
                <AnswerCard questionNumber={questionNumber} answer={answer_two} score={answer_two_score}/>
            </div>
        )
}



export default Question;

