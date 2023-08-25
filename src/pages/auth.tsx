import { useAutoAnimate } from "@formkit/auto-animate/react";
import Head from "next/head";
import React, { useState } from "react";
import Login from "~/components/Login";
import Register from "~/components/Register";

export default function auth() {
  const [currentCard, setCurrentCard] = useState<"Login" | "Register">("Login");
  const [parent] = useAutoAnimate();

  return (
    <>
      <Head>
        <title>Kanban task management</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex h-screen items-center justify-center" ref={parent}>
        {currentCard === "Login" ? (
          <Login setCurrentCard={setCurrentCard} />
        ) : (
          <Register setCurrentCard={setCurrentCard} />
        )}
      </main>
    </>
  );
}
