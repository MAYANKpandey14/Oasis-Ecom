import { GlobalProvider } from "./GlobalProviders";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oasis",
  description: "E-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <GlobalProvider>
          <Navbar />
          <NextTopLoader
            color="#000000"
            height={4}
            showSpinner={false}
            easing="ease"
          />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}
