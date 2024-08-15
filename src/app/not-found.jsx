import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="mt-32 flex flex-col items-center gap-8">
      <h1 className="text-center text-2xl">
        <span className="text-7xl font-semibold block mb-4">404</span>
        you seem to have found something that does not exist.
      </h1>
      <Link
        href="/"
        className="py-4 px-10 rounded-md border-b-2 border-slate-500 font-semibold tracking-wider"
      >
        Go Home
      </Link>
    </div>
  );
}
