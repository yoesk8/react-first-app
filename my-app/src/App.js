import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="Nice to meet you" age="24" name="Yoel" />
      <StatefulGreeting greeting="I'm a stateful class component"/>
    </div>
  );
}

export default App;
