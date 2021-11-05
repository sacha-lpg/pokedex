import { Route, Switch } from "react-router-dom";

import AllPokemonPage from "./page/AllPokemon";
import DresseursPage from "./page/Dresseurs";
import MainNavigation from "./component/layout/MainNavigation";
import useStore from "./Store";





function App() {
  const dresseur = useStore(state => state.dresseur)
  return (
    <div>
      {/* <h1> Bonjour {dresseur.lastName} </h1> */}
       <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <AllPokemonPage />
          </Route>
          <Route path="/nouveau-dresseur">
            <DresseursPage />
          </Route>
        </Switch>   
    </div>
  );
}

export default App;
