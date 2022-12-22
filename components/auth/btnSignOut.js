import { signOut } from "next-auth/react";
import { GoSignOut } from "react-icons/go";

const BtnSignOut = ({ handleSignOut }) => {
  function handleSignOut() {
    signOut();
  }

  return (
    <div className="cursor flex">
      <button
        className="flex justify-center text-md w-6/6 bg-gray-50 text-purple-500 font-semibold px-4 py-2 border rounded-lg hover:bg-purple-400 hover:border-green-500 hover:text-white duration-1000"
        onClick={handleSignOut}
      >
        Sign Out
        <span className="pl-3.5">
          <GoSignOut size={24}></GoSignOut>
        </span>
      </button>
    </div>
  );
};

export default BtnSignOut;
