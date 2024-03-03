import React, {useState} from 'react';
import "./App.css";
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {

  const [courseGoals, setCourseGoals]=useState([
    {id: 'cg1', text: 'Finish a full blown project'},
    {id: 'cg2', text: 'Deploy the project to view from anywhere'},
    {id: 'cg3', text: 'Be firm in all the possible and required knowledges about MERN completely'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  };

  return (<div className="CourseGoals">
    <h2>My Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
  </div>);



};

export default App;
