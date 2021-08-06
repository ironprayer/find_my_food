import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionAnswer from './components/questionAnswer';
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    iscoffee: true,
    isfood: true
  };

  getState() {
    if(this.state.iscoffee == true){
      this.setState({iscoffee:false});
    }else{
      this.setState({iscoffee:true});
    }
  }

  render(){
    const {iscoffee, isfood} = this.state;
    const qnas = QuestionAnswer.getQuestion()
    return (
      <div>
        {iscoffee?(
        <QuestionAnswer
          question={qnas[0].question}
          answer_one={qnas[0].answer_one}
          answer_two={qnas[0].answer_two} 
        />) : (
          <QuestionAnswer
          question={qnas[1].question}
          answer_one={qnas[1].answer_one}
          answer_two={qnas[1].answer_two}
        />          
        )
      }
      <button onClick={this.getState.bind(this)}></button>
      </div>
    )
  }
}

export default App;
