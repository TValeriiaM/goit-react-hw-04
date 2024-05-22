import { Formik, Form, Field } from 'formik';
// import toast from 'react-hot-toast';
import css from "./SearchBar.module.css"

export default function SearchForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field className={css.input} type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}