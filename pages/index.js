import Head from "next/head";
import styles from "../styles/Home.module.css";
import Guest from "../components/auth/guest";
import AuthorizeUser from "../components/auth/authorizeUser";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className={`${styles.container}`}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        {session ? AuthorizeUser() : Guest()}
      </div>
    </>
  );
}
