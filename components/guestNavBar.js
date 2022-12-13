import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { HiHome } from "react-icons/hi";

export default function GuestNavBar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-t from-rose-800  p-6 w-6/6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href={"/"}>
          <a className="mx-4 cursor-pointer">
            <Image src={"/images/ideas.svg"} width={55} height={55} />
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
      </div>
    </nav>
  );
}
