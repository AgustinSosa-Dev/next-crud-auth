import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiAtSymbol } from "react-icons/hi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { signIn } from "next-auth/react";
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

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const {
    touched,
    errors,
    getFieldProps,
    isValid,
    dirty,
    isSubmitting,
    handleChange,
    values,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password too short. Min - 8 characters")
        .max(18, "Password too Long. Max - 18 characters"),
    }),
    onSubmit,
  });

  const defaultErrorMessageProps = {
    touched,
    errors,
  };
  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status.ok) router.push(status.url);
  }
  //Google Handler Function
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  //GitHub Handler Function
  async function handleGithubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. optio vero
            dignissimos?
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              autoComplete="off"
              onChange={handleChange}
              value={values.email}
              className={styles.input_text}
              {...getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <InputErrorMessage {...defaultErrorMessageProps} inputName="email" />
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
              value={values.password}
              className={styles.input_text}
              {...getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              {show ? (
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
          {/* login buttons*/}
          <div className="input-button">
            <button
              type="submit"
              className={styles.button}
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {isSubmitting ? "" : "Login"}
              {isSubmitting ? <p>Login your credentials</p> : null}
            </button>
          </div>
          <div className="input-button">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className={styles.button_custom}
            >
              Sign in with Google
              <Image src={"/assets/google.svg"} width="20" height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            <button
              onClick={handleGithubSignIn}
              type="button"
              className={styles.button_custom}
            >
              Sign in with Github
              <Image src={"/assets/github.svg"} width={25} height={25}></Image>
            </button>
          </div>
        </form>
        {/* Bottom*/}
        <p className="text-center text-gray-400">
          don't have an account yet?
          <Link href={"/register"}>
            <a className="text-blue-700 px-2 hover:underline">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
