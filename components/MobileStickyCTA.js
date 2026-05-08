"use client";

import { motion } from "framer-motion";

export default function MobileStickyCTA() {
    return (
        <motion.a
            href="tel:+61383582538"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
                position: "fixed",
                bottom: "18px",
                right: "18px",
                zIndex: 2000,
                textDecoration: "none",
            }}
        >
            <button
                style={{
                    width: "58px",
                    height: "58px",
                    borderRadius: "50%",
                    border: "none",
                    background: "#1C1A18",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    fontSize: "1.2rem",
                }}
            >
                📞
            </button>
        </motion.a>
    );
}