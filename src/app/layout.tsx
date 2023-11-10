import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ShreewellnessDecoration",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="">
          <div className="max-w-[1560px] mx-auto px-6  ">
            <Navbar />
            {children}
            <Footer />{" "}
          </div>
        </div>
      </body>
    </html>
  );
}
