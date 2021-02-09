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
  const [err, setErr] = useState(null);

  const handleSubmit = (event) => {  
    event.preventDefault();
    try {
      onSubmit(validity, values);
    } catch (err) {
      setErr(err);
    }
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    if (validationSchema[name]) {
      let isValid = validationSchema[name](value);
      setValidity((validity) => {
        return { ...validity, [name]: isValid };
      });
      event.target.setCustomValidity(isValid ? "" : "is invalid");
    }
    setValues((values) => {
      return { ...values, [name]: value };
    });
  };

  const clearErr = async () => {
    setErr(null);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    setValues,
    validity,
    err,
    clearErr,
  };
}
