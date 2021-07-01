import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import MoviePoster from './components/MoviePoster';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './containers/MovieDetails';

function App() {
  return (
    <div className="App">
      <Header title="Harry Potter Movies"/>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/movies/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
