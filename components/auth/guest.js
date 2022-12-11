import Link from "next/link";
import NavBar from "../navBar";
import styles from "../../styles/AuthorizeUser.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import BtnSignOut from "../auth/btnSignOut";
import { HiHome, HiUser } from "react-icons/hi";

export default function Guest() {
  const router = useRouter();

  function handleSignOut() {
    signOut();
  }

  return (
    <main>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-br from-rose-600  p-6 w-6/6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href={"/"}>
            <a className="mx-4 cursor-pointer">
              <Image src={"/images/ideas.svg"} width={55} height={55}></Image>
            </a>
          </Link>
          <span className="font-semibold text-2xl tracking-tight">
            Business Ideas
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <ul className="flex lg:space-x-80 md:space-x-48 lg:justify-center border-b">
              <li className="-mb-px mr-1 cursor-pointer">
                <Link href={"/"}>
                  <span
                    className={
                      router.pathname == "/"
                        ? "block mt-4 lg:inline-block lg:mt-0  lg:text-2xl current:text-amber-500 active border-b-4 border-slate-500 "
                        : "opacity-30 duration-700 "
                    }
                  >
                    <HiHome size={50} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="cursor flex">
            <BtnSignOut onClick={handleSignOut}></BtnSignOut>
          </div>
        </div>
      </nav>
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

{
  /* <main className="container mx-auto text-center py-20">
      <NavBar></NavBar>
      <h3 className="text-4xl font-bold">Guest HomePage</h3>
      <div className="flex justify-center">
        <Link href={"/login"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </main> */
}
