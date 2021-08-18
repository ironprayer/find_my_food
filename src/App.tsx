import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Start from './pages/Start';
import QuestionAnswer from './pages/Question';
import Result from './pages/Results';


function App() {
  return (
    <RecoilRoot>
    <Router>
      <Switch>
        <Route 
          path="/qna/:index">
          <QuestionAnswer/>
        </Route>
        <Route path="/result">
          <Result/>
        </Route>
        <Route path="/">
          <Start/>
        </Route>
      </Switch>
    </Router>
    </RecoilRoot>
  )
}

export default App;
