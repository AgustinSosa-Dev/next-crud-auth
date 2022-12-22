import Link from "next/link";
import GuestNavBar from "../guestNavBar";
import styles from "../../styles/Guest.module.css";
import Footer from "../footer";

export default function Guest() {
  return (
    <div className="overflow-hidden">
      <main>
        <GuestNavBar></GuestNavBar>
        <h1 className="pt-8 text-6xl lg:text-7xl  space-x-4 font-extrabold text-center tracking-widest capitalize bg-gradient-to-br from-sky-300 text-gradient-to-br ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-indigo-300 ">
            Guest Page
          </span>
        </h1>
        <div className={`pt-9 mt-4 ${styles.arrow}`}>
          <h2 className="m-2 pt-6 text-white uppercase text-2xl leading-loose tracking-wider font-bold text-center">
            welcome to our guest page.
          </h2>
        </div>
        <div className={`pt-32 ${styles.wrap}`}>
          <h3 className="pt-2 text-white text-3xl font-bold underline">
            Please follow the steps below:
          </h3>
        </div>
        <div className={styles.container}>
          <div className={`pt-2 ${styles.box}`}>
            <ul className={styles.items}>
              <li className={`duration-700 ${styles.item}`}>
                <h3> If you already have an account.</h3>
              </li>
              <ul className={`mt-7 text-white ${styles["list"]}`}>
                <li>
                  <Link href={"/login"}>
                    <span className="hover:underline cursor-pointer duration-700">
                      Please, Login.
                    </span>
                  </Link>
                </li>
              </ul>
            </ul>
            <ul className={styles.items}>
              <li className={`mt-7 duration-700 ${styles.item}`}>
                <h3>Otherwise:</h3>
              </li>
              <ul className={`mt-7 text-white ${styles["list"]}`}>
                <li>
                  <Link href={"/login"}>
                    <span className="hover:underline cursor-pointer duration-700">
                      Please, create an account.
                    </span>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <h3>
          <div className={`pt-14 ${styles.wrap}`}>
            <Link href={"/profile"}>
              <button
                type="button"
                className={`duration-700 hover:duration-1000 ${styles.guest_button}`}
              >
                <span>Sign In</span>
              </button>
            </Link>
          </div>
        </h3>
      </main>
      <div className="mt-32 bg-gradient-to-br from-sky-300 w-full h-18 ">
        <Footer />
      </div>
    </div>
  );
}
