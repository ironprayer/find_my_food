import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionAnswer from './components/questionAnswer';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    answerIndex:0,
    totalScore:0
  };

  changeTotalScore(score:number) {
    this.setState({totalScore:this.state.totalScore + score})
  }

  changeIndex(){
    this.setState({answerIndex:this.state.totalScore + 1})
  }

  render(){
    const totalScore:number = this.state.totalScore;
    const answerIndex:number = this.state.answerIndex;
    return (
      <div>
        <QuestionAnswer/>  
        <button onClick={this.changeIndex.bind(this)}></button>
      </div>
    )
  }
}

export default App;
