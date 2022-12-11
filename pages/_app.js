import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/globals.css";

//Create client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
