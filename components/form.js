import { useReducer } from "react";
import { useSelector } from "react-redux";
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";

/**
 * It takes an object and an event, and returns a new object with the same
 * properties as the old object, except for the property that matches the event's
 * target name, which is replaced with the event's target value.
 * @param state - the current state of the form
 * @param event - The event object that is passed to the event handler.
 * @returns The state object with the updated value of the input field.
 */
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
