import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

function ContactForm() {
  const nameID = useId();
  const numberID = useId();
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <label htmlFor={nameID}>Name</label>
        <Field className={css.input} id={nameID} name="name"></Field>
        <label htmlFor={numberID}>Number</label>
        <Field className={css.input} id={numberID} name="number"></Field>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
