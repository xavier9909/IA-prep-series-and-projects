import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState';
import { UseReduce } from './components/UseReduce';
import { UseEffect } from './components/UseEffect';

function App() {
  return (
    <div className="App">
     <UseState/>
     <UseReduce/>
     <UseEffect/>
    </div>
  );
}

export default App;
