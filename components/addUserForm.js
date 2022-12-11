import { useState } from "react";
import { useQueryClient, useMutation } from "react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUser, getUsers } from "../lib/helper";
import Bug from "./bug";
import { BiPlus } from "react-icons/bi";
import { successAlert } from "../utils/alerts";

/**
 * It returns a span element with a className of "text-sm	text-rose-600 font-bold
 * py-2" if the inputName is touched and has an error.
 * @returns A React component that takes in three props: touched, errors, and
 * inputName.
 */
function InputErrorMessage({ touched, errors, inputName }) {
  return (
    <span className="text-sm	text-rose-600 font-bold py-2">
      {touched[inputName] && errors[inputName]}
    </span>
  );
}

export default function AddUserForm(formData, setFormData) {
  const [currentRadio, setCurrentRadio] = useState("");
  const queryClient = useQueryClient();
  const addMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  const {
    touched,
    errors,
    getFieldProps,
    isValid,
    dirty,
    isSubmitting,
    resetForm,
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      salary: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string().required("Firstname is required"),
      lastname: Yup.string().required("Lastname is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      salary: Yup.number()
        .positive("The Value must be a positive number.")
        .lessThan(15000, "The value must be less than US$15000.")
        .min(500, "The value must be strictly greater than US$500.")
        .required("Salary is required"),
    }),

    onSubmit,
  });
  const defaultErrorMessageProps = {
    touched,
    errors,
  };

  /**
   * It takes the form data, creates a model object, and then mutates the model
   * object to the database.
   * </code>
   * @param formData - The form data that is passed to the onSubmit function.
   * @returns The formData object is being returned.
   */
  function onSubmit(formData) {
    if (Object.keys(formData).length == 0)
      return console.log("Don't have Form Data");
    let { firstname, lastname, email, salary, date, status } = formData;

    const model = {
      name: `${firstname} ${lastname}`,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 50
      )}.jpg`,
      email,
      salary,
      date,
      status: currentRadio,
    };
    addMutation.mutate(model);
    successAlert();
  }

  if (addMutation.isLoading) return <div>Loading!</div>;
  if (addMutation.isError)
    return <Bug message={addMutation.error.message}></Bug>;
  if (addMutation.isSuccess) return <></>;

  const handleRadio = (e) => {
    setCurrentRadio(e.target.value);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          autoComplete="off"
          placeholder="FirstName"
          {...getFieldProps("firstname")}
        />
        <InputErrorMessage
          {...defaultErrorMessageProps}
          inputName="firstname"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="lastname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          autoComplete="off"
          placeholder="LastName"
          {...getFieldProps("lastname")}
        />
        <InputErrorMessage {...defaultErrorMessageProps} inputName="lastname" />
      </div>
      <div className="input-type">
        <input
          type="email"
          onChange={setFormData}
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          autoComplete="off"
          placeholder="Email"
          {...getFieldProps("email")}
        />
        <InputErrorMessage {...defaultErrorMessageProps} inputName="email" />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          type="number"
          name="salary"
          autoComplete="off"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          placeholder="Salary"
          {...getFieldProps("salary")}
        />
        <InputErrorMessage {...defaultErrorMessageProps} inputName="salary" />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md focus:border-b-4 focus:border-slate-400 border-b-2 border-slate-400"
          {...getFieldProps("date")}
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={handleRadio || setFormData}
            value="Active"
            id="radio1"
            checked={currentRadio == "Active" ? true : false}
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-700 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer focus:border-gray-900"
          />
          <label htmlFor="radio1" className="inline-block tet-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            onChange={handleRadio || setFormData}
            value="Inactive"
            id="radio2"
            checked={currentRadio == "Inactive" ? true : false}
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-700  bg-white checked:bg-rose-500 checked:border-rose-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer focus:border-gray-900"
          />
          <label htmlFor="radio2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div>
      <div className="input-type ">
        <button
          type="reset"
          className="flex justify-center text-md w-4/6 bg-red-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-red-400 hover:text-red-400"
          onClick={resetForm}
        >
          Clear Form
        </button>
      </div>
      <button
        type="submit"
        className="flex justify-center cursor-pointer text-md w-4/6 bg-green-800 text-white font-extrabold px-4 py-2 border rounded-md hover:bg-gray-50
        disabled:bg-green-400 opacity-40
        hover:border-green-700 hover:text-black"
        disabled={!(isValid && dirty) || isSubmitting}
      >
        Add
        <span className="px-1 ">
          <BiPlus size={24}></BiPlus>
        </span>
      </button>
    </form>
  );
}
