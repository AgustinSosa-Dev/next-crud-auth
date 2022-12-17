import Link from "next/link";
import GuestNavBar from "../guestNavBar";
import styles from "../../styles/Guest.module.css";

export default function Guest() {
  return (
    <div className="overflow-hidden">
      <main>
        <GuestNavBar></GuestNavBar>
        <h1 className="pt-8 text-5xl space-x-4 font-bold text-center tracking-widest capitalize bg-gradient-to-br from-red-400 text-slate-900 text-gradient-to-br via-purple-800">
          guest page
        </h1>
        <div className={`pt-9 mt-4 ${styles.arrow}`}>
          <h2 className="m-2 pt-6 uppercase text-2xl leading-loose tracking-wider font-bold text-center">
            welcome to our guest page.
          </h2>
        </div>
        <div className={`pt-32 ${styles.wrap}`}>
          <h3 className="pt-3 text-3xl font-bold underline">
            Please follow the steps below:
          </h3>
        </div>
        <div className={styles.container}>
          <div className={styles.box}>
            <ul className={styles.items}>
              <li className={styles.item}>
                <h3> If you already have an account.</h3>
              </li>
              <ul className={`mt-7 ${styles["list"]}`}>
                <li>Please, Login.</li>
              </ul>
            </ul>
            <ul className={styles.items}>
              <li className={`mt-7 ${styles.item}`}>
                <h3>Otherwise:</h3>
              </li>
              <ul className={`mt-7 ${styles["list"]}`}>
                <li>Please, create an account.</li>
              </ul>
            </ul>
          </div>
        </div>
        <h3>
          <div className={`pt-10 ${styles.wrap}`}>
            <Link href={"/profile"}>
              <button type="button" className={`${styles.guest_button}`}>
                <span>Sign In</span>
              </button>
            </Link>
          </div>
        </h3>
      </main>
    </div>
  );
}
