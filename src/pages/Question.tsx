import * as React from 'react';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Questions from '../data/question.json'
import {totalScoreState} from '../recoil/score'
import QuestionCard from '../components/QuestionCard'
import AnswerCard from '../components/AnswerCard'

type PathParams = {
    index: string;
}

const END_QUESTION_INDEX = 3;

function Question(){
    const {index} = useParams<PathParams>();
    const questionNumber = Number(index) - 1;
    const _qnas = Questions["data"];

    const isQuACompleted = questionNumber + 1 > END_QUESTION_INDEX
    if(isQuACompleted){
        return(
            <Redirect to="/result"></Redirect>   
        )
    }

    const {question, answer_one, answer_one_score, answer_two, answer_two_score} = _qnas[questionNumber]
    return (
            <div>
                <QuestionCard question={question}/>
                <AnswerCard questionNumber={questionNumber} answer={answer_one} score={answer_one_score}/>
                <AnswerCard questionNumber={questionNumber} answer={answer_two} score={answer_two_score}/>
            </div>
        )
}



export default Question;

