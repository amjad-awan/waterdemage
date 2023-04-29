import HeadComponent from "@/components/head/Head";
import '../styles/globals.css'
import { useEffect } from "react";
import { animation } from "../utils";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    animation();
  }, []);
  return (
    <div>
      <HeadComponent />
      <Component {...pageProps} />
    </div>
  );
}
