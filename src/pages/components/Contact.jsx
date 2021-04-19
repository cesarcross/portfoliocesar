import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../styles/contact.module.scss';
import whats from '../../assets/images/whats.png';

// const isRequired = () => {
//   return alert('Please fill all the fields');
// };

// const notify = () =>
//   toast(`Information required`, {
//     position: 'bottom-center',
//     autoClose: 3000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     progress: undefined,
//   });

const messageSent = () =>
  toast.success(`Thanks for your message! I'll answer soon`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
  });

const messageFailed = () =>
  toast.error(`Please fill all the fields`, {
    position: 'bottom-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
   
  });

const Contact = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string(),
        // .max(15, 'Must be 15 characters or less')
        // .required(),
        email: Yup.string().email('Invalid email address'),
        // .required()
        message: Yup.string(),
        // .required()
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log('sent', JSON.stringify(values, null, 2));
        axios
          .post('/api/mail', values)
          .then(function (response) {
            console.log(response);
            messageSent();
          })
          .catch(function (error) {
            console.log(error);
            const { name, email, message } = values;
            if (name || email || message === '') {
              return messageFailed();
            }
          });
        setSubmitting(false);
      }}
    >
      <div className={styles.container} id='contact'>
        <Form className={styles.form}>
          <h2>Get in touch!</h2>

          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' />

          <label htmlFor='email'>Email</label>
          <Field name='email' type='email' />
          <ErrorMessage name='email' />

          <label htmlFor='message'>Message</label>
          <Field name='message' component='textarea' rows='10' />
          <ErrorMessage name='message' />

          <div className={styles.mobilewhats}>
            <a href='https://wa.me/5511981263581' target='_blank'>
              <p>
                Or text me on Whatsapp <img src={whats} alt='' />
              </p>
            </a>

            <button type='submit'>Send</button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Contact;

// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       message: '',
//     },
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//       console.log(values);
//       axios
//         .post('/api/mail', values)
//         .then(function (response) {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor='name'>Name</label>
//       <input
//         id='name'
//         name='name'
//         type='text'
//         onChange={formik.handleChange}
//         value={formik.values.name}
//       />

//       <label htmlFor='email'>Email Address</label>
//       <input
//         id='email'
//         name='email'
//         type='email'
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <label htmlFor='message'>Message</label>
//       <input
//         id='message'
//         name='message'
//         type='text'
//         onChange={formik.handleChange}
//         value={formik.values.message}
//       />

//       <button type='submit'>Submit</button>
//     </form>
//   );
// };

// export default SignupForm;
