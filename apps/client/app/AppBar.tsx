"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function AppBar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">wallgeram</a>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        {session?.user ? (
          <>
            <span className="px-4">{session.user.email}</span>

            <button className="btn btn-secondary" onClick={() => signOut()}>
              sign Out
            </button>
          </>
        ) : (
          <button className="btn" onClick={() => signIn()}>
            sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default AppBar;
