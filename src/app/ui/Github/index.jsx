import { getUser } from "@/utils/data";
import React from "react";

export default async function Github() {
  const data = await getUser();
  return (
    <div className="flex flex-col items-center">
      <img
        src={data?.avatar_url}
        alt="avatar luminoso1"
        width={400}
        height={400}
        className="rounded-full"
        loading="lazy"
      />

      <h1 className="text-2xl mt-4 mb-10">{data?.login}</h1>

      <a
        href="https://github.com/Luminoso1"
        target="_blank"
        className="py-4 px-10 text-lg font-semibold text-white rounded-md 
        border-b-2 border-slate-500 bg-[#00A3FF]"
      >
        Go Github
      </a>
    </div>
  );
}
