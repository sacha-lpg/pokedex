import { useFormik } from "formik";


import classes from "./Formulaire.module.css";
import { dresseurSchema } from "../CONST/VALIDFORM";

function FormDresseur() {

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
    }, 
    validationSchema: dresseurSchema, 
    onSubmit: (values) => {
      alert("Bienvenue sur le pokédex "+values.firstname +" "+ values.lastname +" !");
    },
  });




  return (
    <div className={classes.block}>
    
    <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div className={classes.field}>
      <label htmlFor="firstname">Firstname :</label>
      <input
        id="firstname"
        type="text"
        placeholder="enter your firstname"
        onChange={formik.handleChange}
        value={formik.values.name}
        {... formik.getFieldProps('firstname')}
      />
      {formik.touched.firstname && formik.errors.firstname ? (
        <div className={classes.error}>{formik.errors.firstname}</div>
      ) : null }
      </div>
      <div className={classes.field}>
      <label htmlFor="lastname"> Lastname :</label>
      <input
        id="lastname"
        type="text"
        placeholder="enter your lastname"
        onChange={formik.handleChange}
        value={formik.values.gender}
        {... formik.getFieldProps('lastname')}
      />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div className={classes.error}>{formik.errors.lastname}</div>
      ) : null }
      </div>
      <button type="submit" className={classes.boutton}>Submit </button>
    </form>
    </div>

    
   
  );
}

export default FormDresseur;