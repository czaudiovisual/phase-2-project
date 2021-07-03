import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './containers/MovieDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAddMovie from "./components/FormAddMovie"

function App() {
  return (
    <div className="App">
      <Header title="Movies"/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/form" component={FormAddMovie} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
