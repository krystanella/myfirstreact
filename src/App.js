import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload._krystanellaaaa
        </p>
        <Greet></Greet>
        <Message/>
        <Greet name= "Harley" heroname ="Harley"/>
        <Button/>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
