import logo from './logo.svg';
import './App.css';
import Movie from './Components/Movie'

function App() {
  return (
    <div className="App">
      {/* Une fois le module importé, nous pouvons utiliser la fonction Movie du component Movie.js */}
      <Movie />
    </div>
  );
}

export default App;
