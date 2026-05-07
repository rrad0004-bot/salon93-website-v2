"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
};

export default function About() {
    return (
        <main style={{ padding: "6rem 2rem", background: "#fff" }}>

            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto" }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    About Salon 93
                </h1>

                <p style={{ marginTop: "1rem", color: "#666", lineHeight: "1.6" }}>
                    A modern luxury hair salon dedicated to enhancing confidence through
                    personalised styling, precision cuts, and premium care.
                </p>
            </motion.div>

            {/* STORY SECTION */}
            <div
                style={{
                    marginTop: "4rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "3rem",
                    maxWidth: "1000px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    alignItems: "center",
                }}
            >

                {/* IMAGE */}
                <motion.img
                    src="/images/about.jpg"
                    alt="Salon interior"
                    style={{
                        width: "100%",
                        borderRadius: "16px",
                        objectFit: "cover",
                    }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* TEXT */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: "1.8rem", fontWeight: "600" }}>
                        Our Story
                    </h2>

                    <p style={{ marginTop: "1rem", color: "#666", lineHeight: "1.7" }}>
                        Salon 93 was created with a simple goal — to provide high-quality,
                        personalised hair care in a calm and welcoming environment.
                        Every client is treated with care, attention, and professionalism.
                    </p>

                    <p style={{ marginTop: "1rem", color: "#666", lineHeight: "1.7" }}>
                        We specialise in modern colour techniques, precision cutting,
                        and styling that enhances your natural features.
                    </p>
                </motion.div>
            </div>

            {/* VALUES */}
            <motion.div
                style={{ marginTop: "5rem", textAlign: "center" }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
            >
                <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>
                    Our Values
                </h2>

                <div
                    style={{
                        marginTop: "3rem",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "2rem",
                        maxWidth: "1000px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >

                    <div style={cardStyle}>
                        <h3>✨ Precision</h3>
                        <p style={{ color: "#666" }}>
                            Every cut and colour is carefully crafted.
                        </p>
                    </div>

                    <div style={cardStyle}>
                        <h3>💎 Quality</h3>
                        <p style={{ color: "#666" }}>
                            We use only premium salon-grade products.
                        </p>
                    </div>

                    <div style={cardStyle}>
                        <h3>🤍 Care</h3>
                        <p style={{ color: "#666" }}>
                            Every client experience matters deeply to us.
                        </p>
                    </div>

                </div>
            </motion.div>

        </main>
    );
}

const cardStyle = {
    padding: "2rem",
    border: "1px solid #eee",
    borderRadius: "14px",
    background: "#fafafa",
    textAlign: "left",
};