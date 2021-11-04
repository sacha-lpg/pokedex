import { useFormik } from "formik";
import React from "react";

import classes from "./Formulaire.module.css";
import { dresseurSchema } from "../CONST/VALIDFORM";

function FormDresseur() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      genderType: "",
    },
    validationSchema: dresseurSchema,
    onSubmit: (values) => {
      alert(
        "Bienvenue sur le pokédex " +
          (values.genderType === "Other"
            ? "Truc "
            : values.genderType === "Man"
            ? "Monsieur "
            : "Madame ") +
          values.firstName +
          " " +
          values.lastName +
          " !"
      );
    },
  });

  return (
    <div className={classes.block}>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <div className={classes.field}>
          <label htmlFor="firstName">firstName :</label>
          <input
            id="firstName"
            type="text"
            placeholder="enter your firstName"
            value={formik.values.firstName}
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={classes.error}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className={classes.field}>
          <label htmlFor="lastName"> lastName :</label>
          <input
            id="lastName"
            type="text"
            placeholder="enter your lastName"
            value={formik.values.lastName}
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={classes.error}>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className={classes.field}>
          <label htmlFor="genderType"> Gender :</label>
          <select
            name="genderType"
            value={formik.values.genderType}
            {...formik.getFieldProps("genderType")}
          >
            <option value="" disabled>
              Select a gender
            </option>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Other">Other</option>
          </select>
          {formik.touched.genderType && formik.errors.genderType ? (
            <div className={classes.error}>{formik.errors.genderType}</div>
          ) : null}
        </div>
        <button type="submit" className={classes.boutton} >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDresseur;
