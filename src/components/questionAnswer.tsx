import * as React from 'react';

type qnaInfo = {
    question: string;
    answer_one : string;
    answer_one_score : number;
    answer_two : string;
    answer_two_score : number;
}

class QuestionAnswer extends React.Component<{question:string; answer_one:string; answer_two:string}>{

    static getQuestion():qnaInfo[]{
        return [
            {
                question:"오늘 밥은 뭐야?",
                answer_one:"치킨",
                answer_one_score:1,
                answer_two:"피자",
                answer_two_score:2
            },
            {
                question:"오늘 커피는 뭐야?",
                answer_one:"아메리카노",
                answer_one_score:3,
                answer_two:"라떼",
                answer_two_score:2
            },
            {
                question:"오늘 밥은 뭐야?",
                answer_one:"치킨",
                answer_one_score:1,
                answer_two:"피자",
                answer_two_score:2
            }
        ]
    }

    render(){
        const{question, answer_one, answer_two} = this.props;
        return(
            <div className="ttt">
                <h1>질문</h1>
                <div>{question}</div>
                <h1>대답</h1>
                <button>{answer_one}</button>
                <h1>대답2</h1>
                <div>{answer_two}</div>
            </div>
        )
    }
}

export default QuestionAnswer;