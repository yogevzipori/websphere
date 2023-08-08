import "./globals.css";
import Footer from "./components/footer";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Sphere Remodeling | Las Vegas-Henderson Home Remodeling and Construction",
  description: "Remodeling and construction company in Las Vegas and Henderson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
