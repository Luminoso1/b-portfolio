import React from "react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent ";

export default function GithubSkeleton() {
  return (
    <div className={`flex flex-col items-center max-w-2xl w-full`}>
      <div className="w-[400px] h-[400px] rounded-full bg-gray-300" />
      <div className="w-32 h-8 bg-gray-300 mt-4 mb-10 rounded-sm" />
      <div className="bg-[#00a2ff47] w-44 h-16 rounded-md" />
    </div>
  );
}
