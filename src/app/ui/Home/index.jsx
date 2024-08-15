import React from "react";
import Hero from "./Hero";
import Experience from "./Experience";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Layout from "../components/Layout";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Portfolio />
    </Layout>
  );
}
