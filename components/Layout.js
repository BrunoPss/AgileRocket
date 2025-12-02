import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Head from "next/head";
import Script from "next/script";
import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false });

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>RocketTeam — Agile Coach</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="theme-color" content="#6366F1" />
      </Head>

      <Script src="https://webchat.ng.botschool.ai/chat-component.js" strategy="afterInteractive" />
      
      <Navbar />
      <main className="min-h-screen flex-grow p-5">{children}</main>
      <Chatbot />
      <Footer />
    </>
  );
}
