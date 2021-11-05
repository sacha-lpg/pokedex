import React from 'react';
import useStore from '../../Store';
import classes from './Profil.module.css';
import Man from './../../images/Man.png';
import Woman from './../../images/Woman.png';
import Other from './../../images/Other.png';
import TeamList from './../pokemon/TeamList';
import PokemonList from '../pokemon/PokemonList';

export default function Profil() {
    const dresseur = useStore((state) => state.dresseur);
    const connected = useStore((state) => state.connected);
    const connect = useStore((state) => state.connection);
    const team = useStore(state => state.team);
    let imgUrl = null ;
    console.log(team);
    if(dresseur.genderType === "Man"){
        imgUrl=Man;
    }
    else if(dresseur.genderType === "Woman"){
        imgUrl=Woman;
    }
    else{
        imgUrl=Other;
    }
    
    return (

      <div className={classes.primary}>
          
          <div className={classes.pic}>
              <img src={""+imgUrl} alt="dresseur pic"/>
          </div>
          <div className={classes.secondary}>
              
          <div className={classes.infos}>
          {(dresseur.genderType === "Other"
          ? "Mx "
          : dresseur.genderType === "Man"
          ? "Mr "
          : "Mrs ") +
          dresseur.firstName +
          " " +
          dresseur.lastName}
          </div>
          <div className={classes.team}>
              <h2>Your team : </h2>
              <PokemonList pokemons={team} />
          </div>
          </div>
      </div>
        
    )
}
