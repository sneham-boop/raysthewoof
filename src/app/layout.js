import "./globals.css";
import Header from "./Header";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata = {
  title: `Ray's the woof!`,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${quicksand.className}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
