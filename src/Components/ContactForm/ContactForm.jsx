<<<<<<< HEAD
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function ContactForm() {
  const nameID = useId();
  const numberID = useId();
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <label htmlFor={nameID}>Name</label>
        <Field id={nameID} name="name"></Field>
        <label htmlFor={numberID}>Name</label>
        <Field id={numberID} name="number"></Field>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
=======
import { Formik, Form, Field } from "formik";

function ContactForm() {}
>>>>>>> parent of ce60f92 (Delete src/Components directory)

export default ContactForm;
