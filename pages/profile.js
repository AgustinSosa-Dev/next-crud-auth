import Head from "next/head";
import { BiUserPlus, BiUserMinus, BiX, BiCheck } from "react-icons/bi";
import Table from "../components/table";
import NavBar from "../components/navBar";
import Form from "../components/form";
import { useSelector, useDispatch } from "react-redux";
import { toggleChangeAction, deleteAction } from "../redux/states/reducer";
import { deleteUser, getUsers } from "../lib/helper";
import { useQueryClient } from "react-query";
import { deletedSuccessfullyAlert } from "../utils/alerts";
import { getSession } from "next-auth/react";

export default function Profile() {
  const visible = useSelector((state) => state.app?.client?.toggleForm);
  const deleteId = useSelector((state) => state.app?.client?.deleteId);

  const queryclient = useQueryClient();

  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  const deleteHandler = async () => {
    if (deleteId) {
      await deleteUser(deleteId);
      await queryclient.prefetchQuery("users", getUsers);
      dispatch(deleteAction(null));
      deletedSuccessfullyAlert();
    }
  };

  const cancelHandler = async () => {
    dispatch(deleteAction(null));
  };

  return (
    <section>
      <Head>
        <title>Management System</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <NavBar />
      <main className="py-5 overflow-auto ">
        <h1 className="mb-4 text-3xl py-10 font-extrabold text-center text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Management System
          </span>
        </h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className={
                visible
                  ? "flex bg-green-500 text-white px-4 py-2 ml-5 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800 scale-110 hover:scale-125"
                  : "flex bg-rose-500 text-white px-4 py-2 ml-3 border rounded-md hover:bg-grary-50 hover:border-indigo-500 hover:text-gray-800"
              }
            >
              {visible
                ? "Show Form" && (
                    <span className="px-1 text-white-500 font-bold w-6 h-4 ">
                      <BiUserPlus size={26} />
                    </span>
                  )
                : "Hide Form" && (
                    <span className="px-1 text-white-500 font-bold w-6 h-4">
                      <BiUserMinus size={22} />
                    </span>
                  )}
            </button>
          </div>
          {deleteId ? DeleteComponent({ deleteHandler, cancelHandler }) : <></>}
        </div>
        {/* collapsable form */}
        {!visible ? <Form></Form> : <></>}
        {/* table */}
        <div className="container mx-auto">
          <Table></Table>
        </div>
      </main>
    </section>
  );
}

function DeleteComponent({ deleteHandler, cancelHandler }) {
  return (
    <div className="flex gap-5">
      <button className="text-xl font-bold text-dark px-2">
        Are you sure?
      </button>
      <button
        onClick={deleteHandler}
        className="flex bg-green-500 text-white px-4 py-2 mr-4 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50"
      >
        Yes
        <span className="px-1">
          <BiCheck color="rgb(255 255 255)" size={25} />
        </span>
      </button>
      <button
        onClick={cancelHandler}
        className="flex bg-red-500 text-white px-4 py-2 mr-4 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50"
      >
        No
        <span className="px-1">
          <BiX color="rgb(255 255 255)" size={25} />
        </span>
      </button>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  // authorize user return session
  return {
    props: { session },
  };
}
