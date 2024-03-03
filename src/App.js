import React from 'react';
import "./App.css";
import GoalList from './components/GoalList';
const App = () => {
  return (<div className="CourseGoals">
    <h2>My Goals</h2>
    <GoalList/>
  </div>);
};

export default App;
