import * as React from 'react';
import { Link, Redirect, useParams, useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Questions from '../data/question.json'
import {totalScoreState} from '../recoil/score'


type PathParams = {
    index: string;
}

const END_QUESTION_INDEX = 3;


function Question(){
    const {index} = useParams<PathParams>();
    const questionNumber = Number(index) - 1;
    const _qnas = Questions["data"];
    const history = useHistory();
    const [totalScore, setScore] = useRecoilState(totalScoreState);

    const isQuACompleted = questionNumber + 1 > END_QUESTION_INDEX
    if(isQuACompleted){
        return(
            <Redirect to="/result"></Redirect>   
        )
    }

    const handleAnswerButtonClick = (score:number) => {
        setScore(totalScore + score);
        console.log(totalScore);
        history.push(`/qna/${questionNumber + 2}`)
    }

    return (
            <div className="ttt">
                <h1>질문</h1>
                <div>{_qnas[questionNumber].question}</div>
                <h1>대답</h1>
                <button onClick={handleAnswerButtonClick.bind(undefined, 5)}>{_qnas[questionNumber].answer_one}</button>
                <h1>대답2</h1>
                <button>{_qnas[questionNumber].answer_two}</button>
            </div>
        )
}



export default Question;

