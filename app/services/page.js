"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
};

const services = [
    {
        title: "Haircuts",
        desc: "Precision cuts tailored to your face shape and style.",
        img: "/images/haircut.jpg",
    },
    {
        title: "Colour",
        desc: "From natural tones to full transformations and balayage.",
        img: "/images/colour.jpg",
    },
    {
        title: "Styling",
        desc: "Blow waves, event styling, and everyday glam looks.",
        img: "/images/styling.jpg",
    },
    {
        title: "Treatments",
        desc: "Restore shine, strength, and hair health.",
        img: "/images/treatment.jpg",
    },
];

export default function Services() {
    return (
        <main style={{ padding: "6rem 2rem", background: "#fff" }}>

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    Our Services
                </h1>

                <p style={{ marginTop: "1rem", color: "#666" }}>
                    Premium hair care tailored for women
                </p>
            </motion.div>

            {/* GRID */}
            <div
                style={{
                    marginTop: "4rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "2rem",
                    maxWidth: "1100px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                {services.map((item, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ scale: 1.03 }}
                        style={{
                            borderRadius: "16px",
                            overflow: "hidden",
                            border: "1px solid #eee",
                            background: "#fafafa",
                            cursor: "pointer",
                        }}
                    >
                        {/* IMAGE */}
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "contain",
                            }}
                        />

                        {/* CONTENT */}
                        <div style={{ padding: "1.5rem" }}>
                            <h3 style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                                {item.title}
                            </h3>

                            <p style={{ marginTop: "0.5rem", color: "#666" }}>
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}