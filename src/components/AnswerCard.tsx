import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { totalScoreState } from '../recoil/score';

type prop = {
    questionNumber:number,
    answer:string,
    score:number,
}

function AnswerCard(prop:prop):JSX.Element{
    const {questionNumber, answer, score} = prop;
    const history = useHistory();
    const [totalScore, setScore] = useRecoilState(totalScoreState);

    const handleAnswerButtonClick = (score:number) => {
        setScore(totalScore + score);
        console.log(totalScore);
        history.push(`/qna/${questionNumber + 2}`)
    }    

    return (
        <div>
            <button onClick={handleAnswerButtonClick.bind(undefined, score)}>{answer}</button>
        </div>
    )
}

export default AnswerCard;