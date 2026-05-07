"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
            {/* TOP NAVBAR */}
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    zIndex: 1000,
                    background: "rgba(255,255,255,0.9)",
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

                    {/* DESKTOP MENU */}
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

                    {/* HAMBURGER (MOBILE) */}
                    <button onClick={() => setOpen(true)} className="hamburger">
                        ☰
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            onClick={() => setOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "rgba(0,0,0,0.5)",
                                zIndex: 999,
                            }}
                        />

                        {/* SLIDE MENU */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            style={{
                                position: "fixed",
                                top: 0,
                                right: 0,
                                width: "280px",
                                height: "100vh",
                                background: "#fff",
                                zIndex: 1000,
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem",
                            }}
                        >
                            {/* CLOSE */}
                            <button
                                onClick={() => setOpen(false)}
                                style={{
                                    alignSelf: "flex-end",
                                    fontSize: "1.5rem",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                            >
                                ✕
                            </button>

                            {/* LINKS */}
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    style={{
                                        textDecoration: "none",
                                        fontSize: "1.2rem",
                                        color: "#111",
                                        fontWeight: "500",
                                    }}
                                >
                                    {link.name}
                                </Link>
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