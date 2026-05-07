import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Salon 93 | Luxury Hair Salon Taylors Hill",
  description:
    "Premium women’s hair care specialising in colour, styling, and treatments in Taylors Hill VIC.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* PREMIUM FONT SYSTEM */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#fff",
          color: "#111",
          overflowX: "hidden",
        }}
      >
        <Navbar />

        {/* PAGE CONTENT */}
        <main style={{ paddingTop: "80px" }}>{children}</main>

        <Footer />

      </body>
    </html>
  );
}