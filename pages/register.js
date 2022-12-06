import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiUser } from "react-icons/hi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

function InputErrorMessage({ touched, errors, inputName }) {
  return (
    <span className="text-sm	text-rose-600 font-bold py-2">
      {touched[inputName] && errors[inputName]}
    </span>
  );
}

export default function Register() {
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
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password too short. Min - 8 characters")
        .max(18, "Password too Long. Max - 18 characters")
        .required("Password is required"),
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

  async function onSubmit(values) {
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
  }
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. optio vero
            dignissimos?
          </p>
        </div>

        {/* form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={values.username}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiUser size={25} />
            </span>
          </div>
          <InputErrorMessage
            {...defaultErrorMessageProps}
            inputName="username"
          />

          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <InputErrorMessage {...defaultErrorMessageProps} inputName="email" />

          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              {show.password ? (
                <BsFillEyeFill size={25} />
              ) : (
                <BsFillEyeSlashFill size={25} />
              )}
            </span>
          </div>
          <InputErrorMessage
            {...defaultErrorMessageProps}
            inputName="password"
          />

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              value={values.cpassword}
              className={`${styles.input_text} ${styles.input_form}`}
              {...getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              {show.cpassword ? (
                <BsFillEyeFill size={25} />
              ) : (
                <BsFillEyeSlashFill size={25} />
              )}
            </span>
          </div>
          <InputErrorMessage
            {...defaultErrorMessageProps}
            inputName="cpassword"
          />

          {/* login buttons*/}
          <div className="input-button">
            <button
              type="submit"
              className={styles.button}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              Create account
            </button>
          </div>
        </form>
        {/* Bottom*/}
        <p className="text-center text-gray-400">
          Have an account?
          <Link href={"/login"}>
            <a className="text-blue-700 px-2 hover:underline">Sign In</a>
          </Link>
        </p>
      </section>
    </>
  );
}
