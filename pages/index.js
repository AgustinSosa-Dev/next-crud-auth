import Head from "next/head";
import styles from "../styles/Home.module.css";
import Guest from "../components/auth/guest";
import AuthorizeUser from "../components/auth/authorizeUser";
import { getSession, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? AuthorizeUser({ session }) : Guest()}
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
  return {
    props: { session },
  };
}
