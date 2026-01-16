import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from "./layout/ClientLayout";
import ReduxProvider from "@/provider/ReduxProvider";

const style = localFont({
  src: "../font/Nunito-Regular.ttf",
  variable: "--style-display",
});


const style1 = localFont({
  src: "../../src/font/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--style1-display",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My Dojo",
  description: "My Dojo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="product">
      <body
        className={`${geistSans.variable} bg-black ${geistMono.variable} ${style.variable} ${style1.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="font-style ">
            <ClientLayout>{children}</ClientLayout>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
