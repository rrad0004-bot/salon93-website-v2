import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

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

        {/* PAGE CONTENT WRAPPER */}
        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}