import { useRouter } from "next/router";
import Link from "next/link";
import BtnSignOut from "./auth/btnSignOut";
import { HiHome, HiUser } from "react-icons/hi";

const NavBar = () => {
  const router = useRouter();

  function handleSignOut() {
    signOut();
  }

  return (
    <main>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-br from-rose-600  p-6 w-6/6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href={"/"}>
            <svg
              width="55"
              height="55"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-3 cursor-pointer"
            >
              <circle fill="#324D5B" cx="50" cy="50" r="50" />
              <path
                fill="#EFC75E"
                d="M73.512 42.903c-5.434-11.118-16.541-14.892-23.498-14.892-6.959 0-18.091 3.773-23.524 14.89-5.435 11.119-1.058 21.428 4.245 28.301 5.301 6.872 5.863 9.905 6.195 11.59.331 1.685-.731 4.312 1.294 6.131 2.026 1.82 11.79 2.09 11.79 2.09s9.734-.27 11.759-2.09c2.026-1.818.948-4.447 1.28-6.131.331-1.685.885-4.718 6.188-11.59s9.704-17.181 4.271-28.299z"
              />
              <path
                fill="#DDB857"
                d="M58.794 51.089a4.818 4.818 0 0 0-.88-.09l-.091.01-.823.084c-2.299.438-4.04 2.482-4.04 4.949v2.965h-7.927v-2.965c0-2.465-1.738-4.509-4.033-4.949l-.83-.084-.09-.01c-.305 0-.598.037-.887.09-2.375.389-4.193 2.433-4.193 4.918a5 5 0 0 0 5 5h3v29.992h2V61.007h8v29.992h2V61.007h3a5 5 0 0 0 5-5c0-2.488-1.824-4.536-4.206-4.918zM37 56.007a2.995 2.995 0 0 1 2.912-2.99h.168c1.642 0 2.973 2.258 2.973 5.043l.01.947H40c-1.656 0-3-1.344-3-3zm21 3h-3.068l.01-.947c0-2.785 1.33-5.043 2.973-5.043h.174a2.995 2.995 0 0 1-.089 5.99z"
              />
              <path
                fill="#5A6F7A"
                d="M50 7.999a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0v-8a2 2 0 0 0-2-2zm17.774 4.139c-1.012-.408-2.171.061-2.59 1.049l-3.032 7.147c-.419.987.062 2.118 1.073 2.526s2.171-.061 2.59-1.048l3.032-7.147c.42-.986-.061-2.118-1.073-2.527zm-32.959 1.049c-.419-.988-1.578-1.457-2.59-1.049-1.012.409-1.492 1.541-1.073 2.527l3.032 7.147c.419.987 1.578 1.456 2.59 1.048s1.492-1.539 1.073-2.526l-3.032-7.147zm46.624 9.343a1.864 1.864 0 0 0-2.636 0l-5.272 5.272a1.865 1.865 0 0 0 2.637 2.637l5.271-5.272a1.863 1.863 0 0 0 0-2.637zm-60.243 0a1.864 1.864 0 1 0-2.636 2.637l5.271 5.272a1.865 1.865 0 0 0 2.637-2.637l-5.272-5.272z"
              />
              <path
                fill="#D7B354"
                d="M41.224 88.923c-2.025-1.818-.963-4.446-1.294-6.131-.332-1.685-.895-4.718-6.195-11.59-5.303-6.873-9.68-17.182-4.245-28.301 5.059-10.349 15.053-14.33 22.024-14.83-.517-.037-1.02-.06-1.5-.06-6.959 0-18.091 3.773-23.524 14.89-5.435 11.119-1.058 21.428 4.245 28.301 5.301 6.872 5.863 9.905 6.195 11.59.331 1.685-.731 4.312 1.294 6.131 2.026 1.82 11.79 2.09 11.79 2.09s.586-.017 1.498-.067c-2.819-.159-8.758-.649-10.288-2.023z"
              />
              <path
                fill="#fff"
                d="M59.794 51.089a4.818 4.818 0 0 0-.88-.09l-.091.01-.823.084c-2.299.438-4.04 2.482-4.04 4.949v2.965h-7.927v-2.965c0-2.465-1.738-4.509-4.033-4.949l-.83-.084-.09-.01c-.305 0-.598.037-.887.09-2.375.389-4.193 2.433-4.193 4.918a5 5 0 0 0 5 5h3v29.992h2V61.007h8v29.992h2V61.007h3a5 5 0 0 0 5-5c0-2.488-1.824-4.536-4.206-4.918zM38 56.007a2.995 2.995 0 0 1 2.912-2.99h.168c1.642 0 2.973 2.258 2.973 5.043l.01.947H41c-1.656 0-3-1.344-3-3zm21 3h-3.068l.01-.947c0-2.785 1.33-5.043 2.973-5.043h.174a2.995 2.995 0 0 1-.089 5.99z"
              />
              <path
                fill="#EFEFEF"
                d="M61.772 87.922c-2.024 1.821-11.759 2.091-11.759 2.091s-9.764-.27-11.79-2.091a3.63 3.63 0 0 1-1.138-1.923H37v12.282a50.028 50.028 0 0 0 26 0V85.999h-.093a3.612 3.612 0 0 1-1.135 1.923z"
              />
            </svg>
          </Link>
          <span className="font-semibold text-2xl tracking-tight">
            Business Ideas
          </span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <ul className="flex lg:space-x-80 md:space-x-48 lg:justify-center border-b">
              <li className="-mb-px mr-1">
                <Link href={"/"}>
                  <span
                    className={
                      router.pathname == "/"
                        ? "block mt-4 lg:inline-block lg:mt-0  lg:text-2xl current:text-amber-500 active border-b-4 border-slate-500 "
                        : "opacity-30 duration-700"
                    }
                  >
                    <HiHome size={50} />
                  </span>
                </Link>
              </li>
              {
                <li className="ml-1">
                  <Link href={"/profile"}>
                    <span
                      className={
                        router.pathname == "/profile"
                          ? "block mt-4 lg:inline-block lg:mt-0  lg:text-2xl current:text-purple-700 active border-b-4 border-slate-500"
                          : "hover:text-purple-700 duration-1000 opacity-40"
                      }
                    >
                      <HiUser size={50} />
                    </span>
                  </Link>
                </li>
              }
            </ul>
          </div>
          <div className="cursor flex">
            <BtnSignOut onClick={handleSignOut}></BtnSignOut>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default NavBar;
