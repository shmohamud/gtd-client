import React, { useState } from "react";

const defaultOnSubmit = (validity, values) => {
  console.log(validity, values);
};

export default function useForm(
  onSubmit = defaultOnSubmit,
  validationSchema = {}
) {
  const [values, setValues] = useState({});
  const [validity, setValidity] = useState({});
  const [errs, setErrs] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      onSubmit(validity, values);
    } catch (err) {
      setErrs((errs) => {
        return { ...errs, err };
      });
    }
  };

  const handleChange = (event) => {
    let value = event.target.value.trim();
    let name = event.target.name;
    if (validationSchema[name]) {
      let isValid = validationSchema[name](value);
      setValidity((validity) => {
        return { ...validity, [name]: isValid };
      });
      isValid ? errs && clearErr(name): setErrs((errs) => {
            return { ...errs, [name]: "is invalid" };
          });
    }
    setValues((values) => {
      return { ...values, [name]: value };
    });
  };

  const clearErr = async (name) => {
    let errsCopy = Object.assign({}, errs);
    delete errsCopy[name];
    setErrs(() => errsCopy);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    validity,
    errs,
    clearErr,
  };
}
