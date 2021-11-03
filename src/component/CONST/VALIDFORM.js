import * as yup from 'yup';

export  const dresseurSchema = yup.object().shape({
    firstname: yup.string().max(15, 'Must be 15 characters or less').required('Firstname required'),
    lastname: yup.string().max(20, 'Must be 20 characters or less').required('Lastname required'),
  });