import { useReducer } from "react";
import { useSelector } from "react-redux";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  /* Getting the formId from the redux store. */
  const formId = useSelector((state) => state?.app?.client?.formId);

  return (
    <div className="container mx-auto py-5 font-semibold px-3 ">
      {formId
        ? UpdateUserForm({ formId, formData, setFormData })
        : AddUserForm({ formData, setFormData })}
    </div>
  );
}
