import './App.css';
import styled from 'styled-components'

const Button = styled.button`
  background-color:#7DF9FF;
  color: black;
  padding: 5px 15px;
  border-radius: 7px;
  outline:0;
  cursor:pointer;
  text-transform: uppercase;
  box-shadow: 2px 7px 7px black;
  transition: ease background-color 250ms;
  margin: 10px 20px;
  &:hover{
    background-color:#61DFE5
  }
  `

function App() {
  return (
    <div className="Lock">
      <header className="Lock-header">
        <p>
          Current SmartLock build in dev.
        </p>
        <div classname = "LockButtons">
          <Button>
            Lock
          </Button>

          <Button>
            Unlock
          </Button>

        </div>
       </header>
    </div>
  );
}

export default App;
