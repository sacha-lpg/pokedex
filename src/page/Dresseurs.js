import FormDresseur from "../component/dresseur/Formulaire";
import Profil from "../component/dresseur/Profil";
import useStore from "../Store";

function DresseursPage() {
    
    const connected = useStore((state) => state.connected);
   
    if(connected){
        return (
            <Profil />
        )
    }
    else {
        return <FormDresseur />
    }
       
}

export default DresseursPage; 
