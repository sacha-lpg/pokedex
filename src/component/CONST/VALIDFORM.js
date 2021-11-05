import * as yup from 'yup';

export  const dresseurSchema = yup.object().shape({
    firstName: yup.string().max(15, '❗ Must be 15 characters or less').required('❌ Firstname required'),
    lastName: yup.string().max(20, '❗ Must be 20 characters or less').required('❌ Lastname required'),
    genderType: yup.string().oneOf(["Man","Woman","Other"],"❗ Invalid Gender Type").required("❌ gender required")
  });