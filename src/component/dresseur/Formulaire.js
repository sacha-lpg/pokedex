import { useFormik } from "formik";
import * as yup from 'yup';

import classes from "./Formulaire.module.css";

function FormDresseur() {
  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
    },
    onSubmit: (values) => {
      alert("Bienvenue sur le pokédex "+values.name+" !");
    },
  });

  let schema = yup.object().shape({
    name: yup.string().required(),
    gender: yup.number().required()
  });


  return (
    <div className={classes.block}>
    <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div className={classes.field}>
      <label htmlFor="name">Nom du dresseur :</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="ptdr t ki ?"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      </div>
      <div className={classes.field}>
      <label htmlFor="gender">Genre :</label>
      <input
        id="gender"
        name="gender"
        type="text"
        placeholder="Homme, Femme, Hellicoptère ?"
        onChange={formik.handleChange}
        value={formik.values.gender}
      />
      </div>
      <button type="submit" className={classes.boutton}>Valider </button>
    </form>
    </div>

    
   
  );
}

export default FormDresseur;