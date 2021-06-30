import './App.css';
import Home from './components/Home'
import Movie from './components/Movie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Movie" component={Movie} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
