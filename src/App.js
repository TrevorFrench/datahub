import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Data Hub - where Data Science & Analytics professionals live.
        </p>
      <Welcome name="Trevor" />
      </header>
    </div>
  );
}

export default App;
