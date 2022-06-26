import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState';
import { UseReduce } from './components/UseReduce';
import { UseEffect } from './components/UseEffect';
import { UseRef } from './components/UseRef';

function App() {
  return (
    <div className="App">
     <UseState/>
     <UseReduce/>
     <UseEffect/>
     <UseRef/>
    </div>
  );
}

export default App;
