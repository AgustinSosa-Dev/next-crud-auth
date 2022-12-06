import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { HiAtSymbol } from "react-icons/hi";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import styles from "../styles/Form.module.css";
import RegisterPrueba from "../components/auth/registerPrueba";
import * as Component from "../components/auth/styled/Components";
import RightPanel from "../components/auth/rightPanel";
import LeftPanel from "../components/auth/leftPanel";

function InputErrorMessage({ touched, errors, inputName }) {
  return (
    <span className="text-sm	text-rose-600">
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
const loginPrueba = () => {
  const [SignIn, toggle] = useState(true);
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
    resetForm,
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

  async function onSubmit(values, actions) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/",
    });
    if (status.ok) router.push(status.url);
    actions.resetForm();
  }

  //Google Handler Function
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  //GitHub Handler Function
  async function handleGithubSignIn() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  async function handleFacebookSignIn() {
    signIn("facebook", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Component.MainContainer>
      <Component.Container>
        <Head>
          <title>Login</title>
        </Head>
        <RegisterPrueba></RegisterPrueba>
        <Component.SignInContainer signinIn={SignIn}>
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-2 ${styles.sign_form}`}
          >
            <Component.Title className="text-5xl text-purple-500 pb-12 capitalize">
              Log in
            </Component.Title>
            <div>
              <Component.SocialButton
                className="animate-bounce hover:animate-none"
                onClick={handleGoogleSignIn}
              >
                <Image
                  src={"/assets/google.svg"}
                  width={35}
                  height={35}
                ></Image>
              </Component.SocialButton>
              <Component.SocialButton
                className="animate-bounce hover:animate-none"
                onClick={handleGithubSignIn}
              >
                <Image
                  src={"/assets/github.svg"}
                  width={50}
                  height={50}
                ></Image>
              </Component.SocialButton>
              <Component.SocialButton
                className="animate-bounce hover:animate-none"
                onClick={handleFacebookSignIn}
              >
                <Image
                  src={"/assets/facebook.svg"}
                  width={40}
                  height={40}
                ></Image>
              </Component.SocialButton>
            </div>

            <Component.TitleLevel3 className="text-2xl pt-5">
              or
            </Component.TitleLevel3>
            <Component.Title className="text-3xl text-sky-700 capitalize opacity-60 animate-pulse pb-9 pt-6">
              Sign up with email
            </Component.Title>
            <div className={styles.group}>
              <InputErrorMessage
                {...defaultErrorMessageProps}
                inputName="email"
              />
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                autoComplete="off"
                onChange={handleChange}
                value={values.email}
                className={`${styles.input_text} ${styles.input_form}`}
                {...getFieldProps("email")}
              />
              <span className="flex items-center px-4">
                <HiAtSymbol
                  size={25}
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
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
                value={values.password}
                className={`${styles.input_text} ${styles.input_form}`}
                {...getFieldProps("password")}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  <BsFillEyeFill
                    size={25}
                    title="Click me to hide your password."
                  />
                ) : (
                  <BsFillEyeSlashFill
                    size={25}
                    title="Click me to see your password."
                  />
                )}
              </span>
            </div>
            {/* login buttons*/}
            <div>
              <Component.Button
                type="submit"
                className={styles.button}
                disabled={!(isValid && dirty) || isSubmitting}
              >
                {isSubmitting ? "" : "Login"}
                {isSubmitting ? <p>Login your credentials</p> : null}
              </Component.Button>
            </div>
          </form>
        </Component.SignInContainer>
        <Component.OverlayContainer signinIn={SignIn}>
          <Component.Overlay signinIn={SignIn}>
            <Component.LeftOverlayPanel signinIn={SignIn}>
              <LeftPanel></LeftPanel>
              <Component.SignInButton
                type="reset"
                onClick={() => {
                  toggle(true);
                  resetForm();
                }}
              >
                Sign In
              </Component.SignInButton>
            </Component.LeftOverlayPanel>

            <Component.RightOverlayPanel signinIn={SignIn}>
              <RightPanel reset={resetForm}></RightPanel>

              <Component.SignUpButton
                onClick={() => {
                  toggle(false);
                  resetForm();
                }}
                type="reset"
              >
                Sign Up
              </Component.SignUpButton>
            </Component.RightOverlayPanel>
          </Component.Overlay>
        </Component.OverlayContainer>
      </Component.Container>
    </Component.MainContainer>
  );
};
export default loginPrueba;
