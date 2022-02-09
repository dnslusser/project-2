import logo from './logo.svg';
import './App.css';
import Addition from './Addition';



const App = () => {
  return (
    <>
      <h1>
        Project 2
      </h1>
      <Addition numberOne = {1} numberTwo = {5}/>
      <Addition numberOne = {3} numberTwo = {9}/>
      <Addition numberOne = {5} numberTwo = {4}/>
    </>
  );
};

export default App;
