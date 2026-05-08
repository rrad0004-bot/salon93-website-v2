"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileStickyCTA() {
    return (
        <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
                position: "fixed",
                bottom: "18px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "10px",
                zIndex: 2000,
                backdropFilter: "blur(10px)",
            }}
        >
            {/* CALL */}
            <a href="tel:+61383582538">
                <button
                    style={{
                        padding: "0.9rem 1.2rem",
                        borderRadius: "999px",
                        border: "1px solid rgba(0,0,0,0.08)",
                        background: "#fff",
                        fontWeight: "600",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    }}
                >
                    Call
                </button>
            </a>

            {/* BOOK */}
            <Link href="/contact">
                <button
                    style={{
                        padding: "0.9rem 1.4rem",
                        borderRadius: "999px",
                        border: "none",
                        background: "#1C1A18",
                        color: "#fff",
                        fontWeight: "600",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    }}
                >
                    Book
                </button>
            </Link>
        </motion.div>
    );
}