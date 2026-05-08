"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* NAVBAR */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 1000,
                    background: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid #eee",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        padding: "1rem 1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    {/* LOGO */}
                    <Link
                        href="/"
                        style={{
                            fontWeight: "700",
                            fontSize: "1.2rem",
                            textDecoration: "none",
                            color: "#000",
                        }}
                    >
                        Salon 93
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="desktop-nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                style={{
                                    textDecoration: "none",
                                    color: "#333",
                                    fontWeight: "500",
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* HAMBURGER (MOBILE ONLY) */}
                    <button
                        onClick={() => setOpen(true)}
                        className="hamburger"
                        aria-label="Menu"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP (glass dark fade) */}
                        <motion.div
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "rgba(0,0,0,0.35)",
                                backdropFilter: "blur(6px)",
                                zIndex: 999,
                            }}
                        />

                        {/* GLASS MENU */}
                        <motion.div
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 110, damping: 18 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                width: "300px",
                                height: "100vh",
                                background: "rgba(255,255,255,0.75)",
                                backdropFilter: "blur(20px)",
                                WebkitBackdropFilter: "blur(20px)",
                                zIndex: 1000,
                                padding: "2.5rem 2rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "2rem",
                                boxShadow: "-10px 0 40px rgba(0,0,0,0.1)",
                            }}
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setOpen(false)}
                                style={{
                                    position: "absolute",
                                    top: "1.5rem",
                                    right: "1.5rem",
                                    fontSize: "1.8rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    color: "#111",
                                }}
                            >
                                ✕
                            </button>

                            {/* NAV LINKS (STAGGER ANIMATION) */}
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "1.4rem",
                                            fontWeight: "500",
                                            color: "#111",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* RESPONSIVE STYLES */}
            <style jsx>{`
        .desktop-nav {
          display: flex;
          gap: 1.5rem;
        }

        .hamburger {
          display: none;
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #000;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
        </>
    );
}