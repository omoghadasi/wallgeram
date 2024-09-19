"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function AppBar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="navbar-start">
        <Link href={"/"} className="btn btn-ghost text-xl">
          wallgeram
        </Link>
        {session?.user ? <Link href={"/dashboard"}>dashboard</Link> : <></>}
      </div>
      <div className="navbar-end">
        {session?.user ? (
          <>
            <Link href={""} className="px-4">
              {session.user.username}
            </Link>

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
