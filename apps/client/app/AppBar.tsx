"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function AppBar() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-row align-middle">
      {session?.user ? (
        <>
          <button
            className="bg-red-500 text-white p-4"
            onClick={() => signOut()}
          >
            sign Out
          </button>
          <br />
          <span>{session.user.email}</span>
        </>
      ) : (
        <button
          className="bg-green-500 text-white p-4"
          onClick={() => signIn()}
        >
          sign in
        </button>
      )}
    </div>
  );
}

export default AppBar;
