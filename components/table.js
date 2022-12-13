import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/states/reducer";
import { getUsers } from "../lib/helper";

export default function Table() {
  const { isLoading, isError, data, error } = useQuery("users", getUsers);

  if (isLoading) return <div>Employee is Loading...</div>;
  if (isError) return <div>Got Error {error}</div>;

  return (
    <div className="overflow-auto relative shadow-md sm:rounded-lg mx-3 ">
      <table className="min-w-full table-auto overflow-y-auto ">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-2 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-2 py-2">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-2 py-2">
              <span className="text-gray-200">Salary (USD) / Month</span>
            </th>
            <th className="px-2 py-2">
              <span className="text-gray-200">Date of admission</span>
            </th>
            <th className="px-2 py-2">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-2 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {/* Mapping the data from the API to the table. */}
          {Object.values(data).map((obj, i) => (
            <Tr {...obj} key={i}></Tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Tr({ _id, name, avatar, email, salary, date, status }) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  /**
   * "When the user clicks the button, the function will toggle the visibility of
   * the form, and if the form is visible, it will update the item."
   */
  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    } else if (visible) {
      dispatch(deleteAction(_id));
    }
  };

  return (
    <tr className="bg-gray-100 text-center">
      <td className="px-2 py-2 flex flex-row items-center">
        <img
          src={avatar || "#"}
          alt="Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-center ml-2 px-6 font-semibold">
          {name || "Unknown"}
        </span>
      </td>
      <td className="px-2 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-2 py-2">
        <span>{salary || "Unknown"}</span>
      </td>
      <td className="px-2 py-2">
        <span>{date || "Unknown"}</span>
      </td>
      <td className="px-2 py-2">
        <button className="cursor">
          <span
            className={`${
              status == "Active" ? "bg-green-500" : "bg-rose-500"
            } text-white px-5 py-1 rounded-full`}
          >
            {status || "Unknown"}
          </span>
        </button>
      </td>
      <td className="px-2 py-2 flex justify-around gap-5">
        <button
          className="cursor hover:animate-[spin_1.5s_ease-out] duration-700"
          onClick={onUpdate}
        >
          <BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
        </button>
        <button
          className="cursor hover:animate-[spin_1.5s_ease-out] duration-700"
          onClick={onDelete}
        >
          <BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
        </button>
      </td>
    </tr>
  );
}
