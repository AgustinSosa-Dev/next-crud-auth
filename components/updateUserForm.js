import { useQuery, useMutation, useQueryClient } from "react-query";
import { BiBrush } from "react-icons/bi";
import { getUser, getUsers, updateUser } from "../lib/helper";
import Bug from "./bug";
import { updatedSuccessfullyAlert } from "../utils/alerts";

export default function UpdateUserForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(["users", formId], () =>
    getUser(formId)
  );

  /* A react-query mutation hook. It is used to update the data in the database. */
  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  if (isLoading) return <div>Loading...!</div>;
  if (isError) return <div>Error</div>;

  /* Destructuring the data object and splitting the name into firstname and
 lastname. */

  const { name, avatar, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });
    await UpdateMutation.mutate(updated);
    updatedSuccessfullyAlert();
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={firstname}
          name="firstname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          placeholder="FirstName"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={lastname}
          name="lastname"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          placeholder="LastName"
        />
      </div>
      <div className="input-type">
        <input
          type="email"
          onChange={setFormData}
          defaultValue={email}
          name="email"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          placeholder="Email"
        />
      </div>
      <div className="input-type">
        <input
          onChange={setFormData}
          defaultValue={salary}
          type="number"
          name="salary"
          autoComplete="off"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
          placeholder="Salary"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          defaultValue={date}
          name="date"
          className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-b-8 focus:border-slate-600 border-b-2 border-slate-400"
        />
      </div>
      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            defaultChecked={status == "Active"}
            onChange={setFormData}
            value="Active"
            id="radioDefault1"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 mx-12 mb--80 border border-gray-700 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer focus:border-gray-900"
          />
          <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
            Active
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            defaultChecked={status !== "Active"}
            onChange={setFormData}
            value="Inactive"
            id="radioDefault2"
            name="status"
            className="form-check-input appearance-none rounded-full h-4 w-4 mx-2 mb--40  border border-gray-700  bg-white checked:bg-rose-500 checked:border-rose-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer focus:border-gray-900"
          />
          <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-4/6 bg-purple-400 text-white px-4 py-4 border rounded-md font-bold hover:bg-purple-200 hover:border-purple-500 hover:text-green-500">
        Update
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
      </button>
    </form>
  );
}
