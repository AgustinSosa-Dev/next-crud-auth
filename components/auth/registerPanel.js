import { useRouter } from "next/router";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "../../styles/Form.module.css";
import * as Component from "./styled/Components";
import { HiAtSymbol, HiUser } from "react-icons/hi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";

function InputErrorMessage({ touched, errors, inputName }) {
  return (
    <span className="text-sm	text-rose-600 font-bold">
      {touched[inputName] && errors[inputName] ? (
        <BiErrorCircle size={25}>
          touched[inputName] && errors[inputName]
        </BiErrorCircle>
      ) : (
        ""
      )}
    </span>
  );
}

export default function RegisterPrueba() {
  let SignIn = true;
  const [show, setShow] = useState({ password: false, cpassword: false });
  const router = useRouter();

  const {
    touched,
    errors,
    getFieldProps,
    isValid,
    dirty,
    isSubmitting,
    values,
    resetForm,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(6, "Username too short. Min - 6 characters")
        .max(16, "Username too Long. Max - 16 characters")
        .required("Username is required")
        .matches(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ_.-]{2,45}$/),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required")
        .matches(
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
          "Please enter a valid email format."
        ),
      password: Yup.string()
        .min(8, "Password too short. Min - 8 characters")
        .max(18, "Password too Long. Max - 18 characters")
        .required("Password is required")
        .matches(
          /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
        ),
      cpassword: Yup.string()
        .when("password", {
          is: (value) => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords must match!"
          ),
        })
        .required("You must confirm the password"),
    }),
    onSubmit,
  });

  const defaultErrorMessageProps = {
    touched,
    errors,
  };

  async function onSubmit(values, actions) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000");
      });
    actions.resetForm();
  }
  /* Destructuring the values object. */
  const { username, email, password, cpassword } = values;
  /**
   * If the username, email, password, or cpassword fields are filled out, or if
   * the username, email, password, or cpassword errors are not empty, then return
   * true. Otherwise, return false.
   * @returns A boolean value.
   */

  const handleInputState = () => {
    if (
      username ||
      email ||
      password ||
      cpassword ||
      (errors.username &&
        errors.email &&
        errors.password &&
        errors.cpassword != "")
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Component.Container>
      <Component.SignUpContainer signIn={SignIn}>
        <form
          onSubmit={handleSubmit}
          className={`flex flex-col gap-2 ${styles.sign_form}`}
        >
          <Component.Title className="text-4xl capitalize animate-pulse pb-12 text-sky-700">
            Sign up now
          </Component.Title>
          <div className={styles.group}>
            <InputErrorMessage
              {...defaultErrorMessageProps}
              inputName="username"
            />
            <input
              type="text"
              minLength={6}
              maxLength={24}
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={username}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiUser size={30} title="Min - 6 | Max - 24 characters." />
            </span>
          </div>
          <div className={styles.group}>
            <InputErrorMessage
              {...defaultErrorMessageProps}
              inputName="email"
            />
            <input
              type="email"
              maxLength={255}
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={email}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol
                size={30}
                title="Please enter a valid email format."
              />
            </span>
          </div>

          <div className={styles.group}>
            <InputErrorMessage
              {...defaultErrorMessageProps}
              inputName="password"
            />
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              {show.password ? (
                <BsFillEyeFill
                  size={30}
                  title="
                  Between 8 and 16 characters. 
                at least one number. 
                one capital letter. 
                And one special character."
                />
              ) : (
                <BsFillEyeSlashFill
                  size={30}
                  title="
                  Between 8 and 16 characters 
                  and must contain at least one number, one capital letter and one special character.
                  "
                />
              )}
            </span>
          </div>
          <div className={styles.group}>
            <InputErrorMessage
              {...defaultErrorMessageProps}
              inputName="cpassword"
            />
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={cpassword}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("cpassword")}
            />
            <span
              className="flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              {show.cpassword ? (
                <BsFillEyeFill
                  size={30}
                  title="Click me to hide your password."
                />
              ) : (
                <BsFillEyeSlashFill
                  title="Click me to see your password."
                  size={30}
                />
              )}
            </span>
          </div>

          <div className="pb-12 pt-9">
            <Component.SignUpButton
              type="submit"
              className={styles.button}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Sign Up
            </Component.SignUpButton>
          </div>
          <div>
            <Component.Button
              type="reset"
              value={values}
              className={!handleInputState() ? "bg-rose-500" : "bg-green-500"}
              disabled={!handleInputState()}
              onClick={() => {
                resetForm();
                handleInputState();
              }}
            >
              Reset Form
            </Component.Button>
          </div>
        </form>
      </Component.SignUpContainer>
    </Component.Container>
  );
}
