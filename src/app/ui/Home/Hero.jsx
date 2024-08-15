import Image from "next/image";
import person from "/public/person.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex justify-center ">
      <div className="flex flex-col items-center max-w-lg gap-y-8">
        <Image src={person} alt="person" width={300} height={300} />
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Luminoso1</h1>
          <h3 className="text-2xl mt-1 mb-4 bg-clip-text text-transparent bg-gradient-to-r
           from-[#00a3ff] to-black">
            Fullstack Developer
          </h3>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            atque.
          </p>
        </div>
        <div className="mt-2 flex gap-x-10 ">
          <a href="#!" className="p-4 rounded-md border-b-2 border-slate-500">
            Download CV
          </a>
          <Link
            href="/contact"
            className="bg-[#00A3FF] text-white font-semibold p-4 rounded-md shadow-sm shadow-black"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
