"use client";

import { motion } from "framer-motion";
import { Card } from "components/ui/card";

const fadeUp = {
    hidden: { opacity: 0, y: 25, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1]
        }
    }
};

export default function About() {
    return (
        <main style={{ padding: "7rem 1.5rem", background: "#F6F3EF" }}>

            {/* HERO */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    textAlign: "center",
                    maxWidth: "750px",
                    margin: "0 auto"
                }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    About Salon 93
                </h1>

                <p style={{ marginTop: "1rem", color: "#6B6B6B", lineHeight: "1.6" }}>
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
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                >
                    <Card style={{ padding: 0, overflow: "hidden" }}>
                        <img
                            src="/images/about1.jpg"
                            alt="Salon interior"
                            style={{
                                width: "100%",
                                height: "clamp(260px, 40vw, 420px)",
                                objectFit: "cover",
                                objectPosition: "center",
                            }}
                        />
                    </Card>
                </motion.div>

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
                    {[
                        ["✨ Precision", "Every cut and colour is carefully crafted."],
                        ["💎 Quality", "We use only premium salon-grade products."],
                        ["🤍 Care", "Every client experience matters deeply to us."]
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                        >
                            <Card>
                                <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                                    {item[0]}
                                </h3>
                                <p style={{ marginTop: "0.5rem", color: "#666" }}>
                                    {item[1]}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </main>
    );
}