import HeadComponent from "@/components/head/Head";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <HeadComponent />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
