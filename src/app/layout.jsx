import { Poppins } from "next/font/google";
import "./globals.css";

const poppis = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppis.className}>
        {children}
      </body>
    </html>
  );
}
