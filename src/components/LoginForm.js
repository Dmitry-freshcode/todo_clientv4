import React from 'react'
import styles from './Login.module.css'
import {useFormik} from 'formik';
import * as Yup from 'yup';

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',      
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3,'Username must be 3 or more characters')
        .max(10, 'Username must be 15 characters or less')
        .required('Username required'),
        password: Yup.string()
        .min(4, 'Password must be 4 characters or less')
        .required('Password required'),      
    }),    
    onSubmit: values => {      
      props.callBack(values.username,values.password);
    },
  });

  return (
    <>
    <form onSubmit={formik.handleSubmit} className={styles.loginBody}>      
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder='username'
      />           
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder='password'
      /> 
      <button className={styles.loginButton} type="submit">Submit</button>
      <span></span>  
    </form>
    <div className={styles.errors}>
    {formik.touched.username && formik.errors.username ? (
        <div className={styles.error}>{formik.errors.username}</div>
      ) : null} 
      {formik.touched.password && formik.errors.password ? (
        <div className={styles.error}>{formik.errors.password}</div>
      ) : null}
    </div>
    </>
  );
};

export default  LoginForm;
