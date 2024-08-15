import { projects } from "@/utils/constants";
import H2 from "../components/H2";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section>
      <H2>Portfolio</H2>
      <div className="mt-20 grid md:grid-cols-2 justify-center gap-10">
        {projects.map(({ name, description, src }) => (
          <div
            key={name}
            className="rounded-xl overflow-hidden bg-black text-white"
          >
            <Image
              src={src}
              alt={name}
              width={480}
              height={280}
              className="max-h-[280px] object-cover"
            />
            <div className="px-4 py-6">
              <div>
                <h3 className="mb-2 text-lg font-bold tracking-wider">
                  {name}
                </h3>
                <p>{description}</p>
              </div>
              <div className="flex justify-around gap-4 mt-6">
                <a
                  href="/#!"
                  className="py-2 px-8 rounded-md border-b-2 tracking-widest"
                >
                  Code
                </a>
                <a
                  href="/#!"
                  className="py-2 px-8 rounded-md bg-[#00a3ff] text-base 
                  tracking-widest font-semibold"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
