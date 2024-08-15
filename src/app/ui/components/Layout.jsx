"use client"
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NProgress from "nprogress";

export default function Layout({ children }) {
  const path = usePathname();
  useEffect(()=>{
    NProgress.start()
    setTimeout(() => {
    NProgress.done()
      
    }, 2000);
  },[path])
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
