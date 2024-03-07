import logo from './logo.svg';
import './App.css';
import FuncGreet from './components/FuncGreet';
import FuncGreetWProps from './components/FuncGreetWProps';

function App() {
  return (
    <div className="App">
      <FuncGreetWProps />
      <FuncGreet/>  
    </div>
  );
}

export default App;
