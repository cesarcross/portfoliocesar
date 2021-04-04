import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from '../styles/contact.module.scss';

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),

        message: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <div className={styles.container}>
        <Form className={styles.form}>
          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' />

          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' />

          <label htmlFor='message'>Message</label>
          <Field name='message' type='text' />
          <ErrorMessage name='message' />

          <button type='submit'>Submit</button>
        </Form>
      </div>
    </Formik>
  );
};

export default Contact;
