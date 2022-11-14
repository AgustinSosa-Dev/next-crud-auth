import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AuthorizeUser({ session }) {
  function handleSignOut() {
    signOut();
  }

  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold py-4">Authorize User HomePage</h3>
      <div className="details">
        <h5 className="py-1">{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
      <div className="flex justify-center">
        <Link href={"/profile"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile Page
          </a>
        </Link>
      </div>
    </main>
  );
}
