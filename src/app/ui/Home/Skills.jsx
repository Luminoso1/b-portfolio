import { skills } from "@/utils/constants";
import H2 from "../components/H2";

export default function Skills() {
  return (
    <section>
      <H2>Skills</H2>
      <div className="mt-20 grid md:grid-cols-2 gap-x-4 gap-y-20 max-w-[780px] w-full mx-auto justify-center items-center content-center place-content-center skills">
        {skills.map(({ name, value, color }) => (
          <div key={name} className="w-full  skill">
            <p className="mb-2 flex justify-between px-2">
              {name}
              <span>{value}%</span>
            </p>
            <div className="bg-[#D9D9D9] h-5 rounded-full relative overflow-hidden">
              <div
                style={{ backgroundColor: color, width: `${value}%` }}
                className={`absolute left-0 top-0 bottom-0 w-10 `}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
