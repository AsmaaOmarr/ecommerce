"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { CartContextProvider } from "./contexts/cartcontextprovider";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "ShopEase",
//   description: "",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body>
        {isAdminRoute ? (
          children
        ) : (
          <CartContextProvider>
            {" "}
            <Navbar></Navbar> {children}
          </CartContextProvider>
        )}
      </body>
    </html>
  );
}
