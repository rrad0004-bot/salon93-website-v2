"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PrimaryButton, OutlineButton } from "./components/ui/button";
import { Card } from "./components/ui/card";

/* ANIMATIONS */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 2rem",
          textAlign: "center",
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        {/* OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
          }}
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            position: "relative",
            maxWidth: "850px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              letterSpacing: "3px",
              fontSize: "0.8rem",
              opacity: 0.75,
              textTransform: "uppercase",
            }}
          >
            Luxury Hair Salon • Taylors Hill
          </p>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              marginTop: "1rem",
            }}
          >
            Salon 93
          </h1>

          <p
            style={{
              marginTop: "1.5rem",
              maxWidth: "600px",
              opacity: 0.85,
              lineHeight: "1.6",
            }}
          >
            Premium women’s hair care specialising in colour, styling and
            treatments designed to enhance your natural beauty.
          </p>

          {/* BUTTONS (FIXED) */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="/contact">
              <PrimaryButton>Book Appointment</PrimaryButton>
            </Link>

            <a href="tel:+61383582538">
              <OutlineButton>Call Now</OutlineButton>
            </a>
          </div>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.9rem",
              opacity: 0.6,
            }}
          >
            📍 Taylors Hill VIC 3037
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Our Services
        </h2>

        <p style={{ color: "#666", marginTop: "1rem" }}>
          Tailored hair care designed for confidence and beauty
        </p>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            ["✂️ Haircuts", "Precision cuts tailored to your face shape."],
            ["🎨 Colour", "Natural tones to full transformations."],
            ["✨ Styling", "Blow waves and event styling."],
            ["💆‍♀️ Treatments", "Restore shine and strength."],
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
                <h3>{item[0]}</h3>
                <p style={{ color: "#666" }}>{item[1]}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY CHOOSE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        style={{
          padding: "5rem 2rem",
          background: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Why Choose Salon 93
        </h2>

        <p style={{ color: "#666", marginTop: "1rem" }}>
          Precision, care, and personalised styling for every client.
        </p>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            ["💇‍♀️ Expert Stylists", "Professional cutting & colouring experience."],
            ["🎨 Personalised Service", "Tailored to your face shape & lifestyle."],
            ["✨ Premium Products", "High-quality hair care products."],
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
                <h3>{item[0]}</h3>
                <p style={{ color: "#666" }}>{item[1]}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          padding: "5rem 2rem",
          background: "#000",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Ready for a fresh look?
        </h2>

        <p style={{ marginTop: "1rem", opacity: 0.7 }}>
          Book your appointment today.
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/contact">
            <PrimaryButton>Book Appointment</PrimaryButton>
          </Link>

          <a href="tel:+61383582538">
            <OutlineButton>Call Now</OutlineButton>
          </a>
        </div>
      </motion.section>
    </>
  );
}