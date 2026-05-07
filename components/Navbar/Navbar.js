"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                padding: "1rem 2rem",
                transition: "all 0.3s ease",
                background: scrolled
                    ? "rgba(255,255,255,0.7)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
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
                        fontSize: "1.1rem",
                        textDecoration: "none",
                        color: "#000",
                    }}
                >
                    Salon 93
                </Link>

                {/* LINKS */}
                <div style={{ display: "flex", gap: "1.5rem" }}>
                    <Link style={linkStyle} href="/">Home</Link>
                    <Link style={linkStyle} href="/services">Services</Link>
                    <Link style={linkStyle} href="/about">About</Link>
                    <Link style={linkStyle} href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

const linkStyle = {
    textDecoration: "none",
    color: "#000",
    fontSize: "0.95rem",
    opacity: 0.8,
    transition: "0.2s",
};