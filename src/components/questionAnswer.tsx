import * as React from 'react';

type qnaInfo = {
    question: string;
    answer_one : string;
    answer_one_score : number;
    answer_two : string;
    answer_two_score : number;
}

class QuestionAnswer extends React.Component{
    state = {
        answerIndex:0,
        totalScore:0
    }
    _qnas:qnaInfo[] = [
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
                question:"도레미",
                answer_one:"도도",
                answer_one_score:1,
                answer_two:"도레미",
                answer_two_score:2
            }
        ]
    
    processForNextStep(selectNum:number = 1 | 2){
        const answerIndex:number = this.state.answerIndex;
        if(selectNum == 1){
            console.log(1);
        }
        this.increaseAnswerIndex()
    }

    increaseAnswerIndex(){
        console.log(this.setState({answerIndex:this.state.answerIndex + 1}))
        console.log(this.state)
    }

    render(){
        const answerIndex:number = this.state.answerIndex;
        return(
            <div className="ttt">
                <h1>질문</h1>
                <div>{this._qnas[answerIndex%3].question}</div>
                <h1>대답</h1>
                <button onClick={this.processForNextStep.bind(this,1)} >{this._qnas[answerIndex%3].answer_one}</button>
                <h1>대답2</h1>
                <button onClick={this.processForNextStep.bind(this,2)}>{this._qnas[answerIndex%3].answer_two}</button>
            </div>
        )
    }
}

export default QuestionAnswer;