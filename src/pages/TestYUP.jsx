import React from "react";
import * as Yup from "yup";

const NAME_SCHEME = Yup.string("must be string")
  .matches(/^[A-Z][a-z]{1,31}$/, "regexp")
  .min(1, "min length: 1")
  .max(20)
  .required();

const EMAIL_SCHEME = Yup.string("must be string")
  .email()
  .min(5, "min length: 5")
  .max(64)
  .required();

const LOG_IN_USER_SCHEME = Yup.object({
  firstName: NAME_SCHEME,
  lastName: NAME_SCHEME,
  email: EMAIL_SCHEME,
  age: Yup.number().integer(),
  gender: Yup.boolean().required(),
  password: Yup.string()
    .trim()
    .required()
    .matches(/.{8, 32}/)
    .required(),
});

const user = {
  firstName: "Bob",
  lastName: "Fisher",
  email: "MAIL_SCHEME@gmail.com",
  age: 50,
  gender: true,
  password: "qwerty2000",
};

const TestYUP = () => {
  console.log(LOG_IN_USER_SCHEME.isValid(user));
  console.log(LOG_IN_USER_SCHEME.validateSync(user));
};

export default TestYUP;
