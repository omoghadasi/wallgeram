"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="flex m-10">
          <nav className="ml-10">
            <ul className="menu bg-base-200 rounded-box w-56">
              <li>
                <Link href={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link href={"/dashboard/users"}>Users</Link>
              </li>
            </ul>
          </nav>
          <div className="flex-1">{children}</div>
        </div>
      ) : (
        <div className="flex">
          {" "}
          <div role="alert" className="alert alert-error mt-10 mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Only User login access to dashboard</span>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardLayout;
