import './App.css';
import Message from './Components/Connection'
import State from './Components/State'



function App() {
  return (
    <div className="Lock">
      <header className="Lock-header">
        <h1>
          SMART LOCK
        </h1>
        <p>
           Currrent Lock Status: <Message/>
        </p>
        <State/>
       </header>
    </div>
  );
}


export default App;
