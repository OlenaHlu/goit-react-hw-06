import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};
const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(7, "Number must be at least 7 characters")
      .max(15, "Number must not exceed 15 characters")
      .required("Number is required"),
  });

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formContainer}>
        <div className={css.inputContainer}>
          <label className={css.inputTitle} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.inputItem}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.formErr} name="name" component="div" />
        </div>

        <div className={css.inputContainer}>
          <label className={css.inputTitle} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.inputItem}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.formErr} name="number" component="div" />
        </div>

        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
