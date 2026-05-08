"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PrimaryButton, OutlineButton } from "../components/ui/button";
import { Card } from "../components/ui/card";

/* ANIMATIONS */
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
          padding: "8rem 1.5rem 6rem",
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
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.65))",
          }}
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          style={{
            position: "relative",
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* TAGLINE */}
          <p
            style={{
              letterSpacing: "3px",
              fontSize: "0.75rem",
              opacity: 0.8,
              color: "#e6d3d3", // soft rose tint
              textTransform: "uppercase",
            }}
          >
            Luxury Hair Salon • Taylors Hill
          </p>

          {/* TITLE */}
          <h1
            style={{
              fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
              fontWeight: "700",
              marginTop: "1.6rem",
              letterSpacing: "-1px",
              color: "#fff",
            }}
          >
            Salon 93
          </h1>

          {/* SUBTEXT */}
          <p
            style={{
              marginTop: "1.8rem",
              maxWidth: "540px",
              fontSize: "1.1rem",
              opacity: 0.85,
              lineHeight: "1.75",
            }}
          >
            Premium women’s hair care specialising in colour, styling and treatments
            designed to enhance your natural beauty.
          </p>

          {/* BUTTONS */}
          <div
            style={{
              marginTop: "3.2rem",
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
              <OutlineButton variant="dark">Call Now</OutlineButton>
            </a>
          </div>

          {/* LOCATION */}
          <p
            style={{
              marginTop: "3rem",
              fontSize: "0.85rem",
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
          padding: "7rem 1.5rem",
          textAlign: "center",
          background: "#F6F3EF", // from theme
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Our Services
        </h2>

        <p style={{ color: "#6B6B6B", marginTop: "1rem" }}>
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
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
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
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Why Choose Salon 93
        </h2>

        <p style={{ color: "#6B6B6B", marginTop: "1rem", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
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
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
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
          background: "#1A1A1A",
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
            <OutlineButton variant="dark">Call Now</OutlineButton>
          </a>
        </div>
      </motion.section>

      {/* FOOTER INFO SECTION */}
      <section
        style={{
          padding: "4rem 2rem",
          background: "#F6F3EF",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "700" }}>
          Visit Salon 93
        </h2>

        <p
          style={{
            marginTop: "1rem",
            color: "#666",
            maxWidth: "520px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          Your local luxury hair salon in Taylors Hill — premium care, personalised styling,
          and a calm modern experience.
        </p>

        <div
          style={{
            marginTop: "2rem",
            color: "#444",
            lineHeight: "1.8",
          }}
        >
          <p>📍 7/127 Gourlay Rd, Taylors Hill VIC 3037</p>
          <p>📞 +61 3 8358 2538</p>
        </div>
      </section>
    </>
  );
}