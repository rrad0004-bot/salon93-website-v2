"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav style={navStyle}>
            <div style={containerStyle}>

                {/* LOGO */}
                <Link href="/" style={{ fontWeight: "bold" }}>
                    Salon 93
                </Link>

                {/* LINKS */}
                <div style={linksStyle}>
                    <Link href="/">Home</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>

            </div>
        </nav>
    );
}

const navStyle = {
    padding: "1rem 2rem",
    borderBottom: "1px solid #eee",
};

const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const linksStyle = {
    display: "flex",
    gap: "1.5rem",
};