import logo from './logo.svg';
import './App.css';
import Title from './Title.js';

function App() {
return (
    <div className="App">
      <Title />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
