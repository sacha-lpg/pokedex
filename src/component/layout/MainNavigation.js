import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import pokeball from "./../../images/pokeball.png";
import dresseur from "./../../images/dresseur.png";

function MainNavigation() {
  
  return (
    <header className={classes.menu}>
      <nav>
        <div className={classes.page}>
        <div >
          <Link to="/">
            <img className={classes.pokeball} src={pokeball} alt="..." />
          </Link>
        </div>

        <div className={classes.logo}>
          <Link to="/nouveau-dresseur">
            <img className={classes.dresseur} src={dresseur} alt="..."/>
          </Link>
        </div>
        </div>
        
      </nav>
    </header>
  );
}

export default MainNavigation;