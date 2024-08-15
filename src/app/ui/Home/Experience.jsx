import React from "react";
import H2 from "../components/H2";
import { experience } from "@/utils/constants";

export default function Experience() {
  return (
    <section>
      <H2>Experience</H2>
      <div className="mt-24 flex flex-col gap-y-32 items-center">
        {experience.map(({ icon, title, description }) => {
          const Icon = icon;
          return (
            <article
              key={title}
              className="flex flex-col md:flex-row gap-y-6 text-center md:text-left gap-x-8 items-center px-2 max-w-3xl"
            >
              <Icon />
              <div>
                <h3 className="text-xl mb-2">{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
