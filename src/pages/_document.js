import { Html, Head, Main, NextScript } from "next/document";
import { poppins } from "@/fonts/fonts";

export default function Document() {
  return (
    <Html lang="en" >
      <Head />
      <body className={`${poppins.className}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
