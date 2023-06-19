import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClassComponent from './components/EventsClassComponent';
import EventsFunctional from './components/EventsFunctional';

function App() {
  return (
    <div className="App">
      <EventsClassComponent/>
      <EventsFunctional/>
    </div>
  );
}

export default App;
