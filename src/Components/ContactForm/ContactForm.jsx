import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

function ContactForm({ onAdd }) {
  const nameID = useId();
  const numberID = useId();
  const initialInfo = {
    name: "",
    number: "",
  };
  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, " Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string().min(7, " Too Short!").required("Required"),
  });

  function handleSubmit(values, actions) {
    const newContact = { id: Date.now(), ...values };

    newContact.name = newContact.name
      .trim()
      .split(" ")
      .map(
        (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");

    newContact.number = newContact.number
      .trim()
      .split("")
      .toSpliced(3, 0, "-")
      .toSpliced(6, 0, "-")
      .join("");

    onAdd(newContact);

    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialInfo}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameID}>Name</label>
        <ErrorMessage name="name" component="span" />
        <Field className={css.input} id={nameID} name="name" />

        <label htmlFor={numberID}>Number</label>
        <ErrorMessage name="number" component="span" />
        <Field className={css.input} id={numberID} name="number" type="tel" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
