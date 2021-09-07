import axios from "axios";
import React, { useState, useEffect } from "react"
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import './App.css';
import Search from './components/Search';

const Planet = (props) => {
  const [state, setState] = useState()
  const { id } = useParams()
  console.log({ id })

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => setState(response.data))
      .catch(error => console.log(error))
}, [id]);
  return (
    <div>
      <Search />
      <div>
        {
          (state) ?
            <div>
              <h1>{state.name}</h1>
              <h3>Climate: {state.climate}</h3>
              <h3>Terrain: {state.terrain}</h3>
              <h3>Surfacewater: {state.surface_water}</h3>
              <h3>Population: {state.population}</h3>
            </div> : <h1>Error</h1>
        }
      </div>
    </div>

  )
}
const People = (props) => {
  const [state, setState] = useState()
  const { id } = useParams()
  console.log({ id })

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(response => setState(response.data))
      .catch(error => console.log(error))
}, [id]);
  return (
    <div>
      <Search />
      <div>
        {
          (state) ?
            <div>
              <h1>{state.name}</h1>
              <h3>Height: {state.height}</h3>
              <h3>Mass: {state.mass}</h3>
              <h3>Hair Color: {state.hair_color}</h3>
              <h3>Skin Color: {state.skin_color}</h3>
            </div> : <h1>Error</h1>
        }
      </div>
    </div>

  )
}
const Home = (props) => {
  return (
    <Search />
  )
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/planets/:id">
          <Planet />
        </Route>
        <Route exact path="/people/:id">
          <People />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
