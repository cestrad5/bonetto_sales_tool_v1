import "../styles/globals.css";
import { BonettoProvider } from "../context/BonettoProvider";

function MyApp({ Component, pageProps }) {
  return (
    <BonettoProvider>
      <Component {...pageProps} />
    </BonettoProvider>
  );
}

export default MyApp;
