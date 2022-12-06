import Link from "next/link";
import NavBar from "../navBar";

export default function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <NavBar></NavBar>
      <h3 className="text-4xl font-bold">Guest HomePage</h3>
      <div className="flex justify-center">
        <Link href={"/login"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main>
  );
}
