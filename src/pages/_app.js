import HeadComponent from "@/components/head/Head";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <HeadComponent />
      <Component {...pageProps} />
    </div>
  );
}
