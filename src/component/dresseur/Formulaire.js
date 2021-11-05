import { useFormik } from "formik";
import React from "react";
import useStore from "./../../Store";

import classes from "./Formulaire.module.css";
import { dresseurSchema } from "../CONST/VALIDFORM";

function FormDresseur(props) {
  const register = useStore((state) => state.register);
  const dresseur = useStore((state) => state.dresseur);
  const connected = useStore((state) => state.connected);
  const connect = useStore((state) => state.connection);

  function add(person) {
    register(person);
    connect();
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      genderType: "",
    },
    validationSchema: dresseurSchema,
    onSubmit: (values) => {
      add(values);
      alert(
        "Welcome on Pokédex " +
          (values.genderType === "Other"
            ? "Mx "
            : values.genderType === "Man"
            ? "Mr "
            : "Mrs ") +
          values.firstName +
          " " +
          values.lastName +
          " You'll have acces to the team picker !"
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
              placeholder="Doe"
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
              placeholder="John"
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
          <button type="submit" className={classes.boutton}>
            Submit
          </button>
        </form>
      </div>
    );
  }

export default FormDresseur;
