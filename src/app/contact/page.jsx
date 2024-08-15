import Link from "next/link";
import Layout from "../ui/components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl">Oops</h2>
        <h2 className="text-3xl mt-8 mb-10 max-w-md text-center leading-normal">
          it seems that I don&apos;t have a contact form yet
        </h2>
        <Link
          href="/"
          className="bg-[#00A3FF] text-white font-semibold py-4 px-10 rounded-md shadow-sm shadow-black"
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
}
