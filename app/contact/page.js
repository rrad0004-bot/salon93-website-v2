"use client";

import { motion } from "framer-motion";
import { Card } from "components/ui/card";
import { PrimaryButton } from "components/ui/button";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
};

export default function Contact() {
    return (
        <main style={{ padding: "6rem 2rem", background: "#F6F3EF" }}>

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
            >
                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    Book an Appointment
                </h1>

                <p style={{ marginTop: "1rem", color: "#666" }}>
                    Fill out the form below or call us directly.
                </p>
            </motion.div>

            {/* LAYOUT */}
            <div
                style={{
                    marginTop: "4rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "3rem",
                    maxWidth: "1000px",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >

                {/* LEFT INFO */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                >
                    <Card>
                        <h2 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
                            Salon 93
                        </h2>

                        <p style={{ marginTop: "1rem", color: "#666", lineHeight: "1.6" }}>
                            Premium women’s hair salon located in Taylors Hill.
                        </p>

                        <div style={{ marginTop: "2rem", color: "#444", lineHeight: "1.8" }}>
                            <p>📍 7/127 Gourlay Rd, Taylors Hill VIC</p>
                            <p>📞 +61 3 8358 2538</p>
                            <p>⏰ Mon - Sat: 9am - 6pm</p>
                        </div>
                    </Card>
                </motion.div>

                {/* FORM */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                >
                    <Card>
                        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <input placeholder="Full Name" style={inputStyle} />
                            <input placeholder="Phone Number" style={inputStyle} />
                            <input placeholder="Email" style={inputStyle} />
                            <textarea
                                placeholder="What would you like done?"
                                rows="5"
                                style={{ ...inputStyle, resize: "none" }}
                            />

                            <PrimaryButton>
                                Send Request
                            </PrimaryButton>
                        </form>
                    </Card>
                </motion.div>

            </div>
        </main>
    );
}

const inputStyle = {
    padding: "1rem",
    borderRadius: "12px",
    border: "1px solid rgba(0,0,0,0.08)",
    outline: "none",
    fontSize: "1rem",
    background: "#fff",
};