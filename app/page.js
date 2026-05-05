import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to bottom, #ffffff, #f6f6f6)",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              letterSpacing: "-1px",
            }}
          >
            Salon 93
          </h1>

          <p
            style={{
              marginTop: "1rem",
              fontSize: "1.3rem",
              color: "#666",
            }}
          >
            Luxury hair care, colour & styling in Taylors Hill
          </p>

          <p
            style={{
              marginTop: "1.5rem",
              color: "#888",
              fontSize: "1rem",
              lineHeight: "1.6",
            }}
          >
            Specialising in women’s cuts, colour transformations, treatments,
            and professional styling designed to elevate your look.
          </p>

          {/* CTA BUTTONS */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                padding: "0.9rem 1.5rem",
                background: "#000",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Book Appointment
            </Link>

            <a
              href="tel:+61383582538"
              style={{
                padding: "0.9rem 1.5rem",
                border: "1px solid #000",
                color: "#000",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}