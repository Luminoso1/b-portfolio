import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-5xl">Oops</h2>
      <h2 className="text-3xl mt-8 mb-10">
        it seems that I don&apos;t have a blog yet
      </h2>
      <Link
        href="/"
        className="bg-[#00A3FF] text-white font-semibold py-4 px-10 rounded-md shadow-sm shadow-black"
      >
        Go Back
      </Link>
    </div>
  );
}
