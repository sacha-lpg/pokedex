import { Route, Switch } from "react-router-dom";

import AllPokemonPage from "./page/AllPokemon";
import DresseursPage from "./page/Dresseurs";
import MainNavigation from "./component/layout/MainNavigation";





function App() {
  return (
    <div>
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
