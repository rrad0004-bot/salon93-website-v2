import Link from "next/link";

const cardStyle = {
  padding: "2rem",
  border: "1px solid #eee",
  borderRadius: "12px",
  textAlign: "left",
  background: "#fafafa",
};

const serviceCard = {
  padding: "2.2rem",
  borderRadius: "14px",
  background: "#fafafa",
  border: "1px solid #eee",
  textAlign: "left",
  transition: "all 0.2s ease",
};

const cardTitle = {
  fontSize: "1.3rem",
  fontWeight: "600",
  marginBottom: "0.8rem",
};

const cardText = {
  color: "#666",
  lineHeight: "1.6",
};

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
          padding: "5rem 2rem",
          textAlign: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)",
        }}
      >
        <div style={{ maxWidth: "850px" }}>

          <p style={{ letterSpacing: "2px", color: "#999", fontSize: "0.85rem" }}>
            LUXURY HAIR SALON • TAYLORS HILL
          </p>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              marginTop: "1rem",
              letterSpacing: "-1px",
            }}
          >
            Salon 93
          </h1>

          <p
            style={{
              marginTop: "1.2rem",
              fontSize: "1.25rem",
              color: "#555",
              lineHeight: "1.6",
            }}
          >
            Premium women’s hair care specialising in colour, styling,
            extensions and treatments designed to enhance your natural beauty.
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
                padding: "1rem 1.6rem",
                background: "#000",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Book Appointment
            </Link>

            <a
              href="tel:+61383582538"
              style={{
                padding: "1rem 1.6rem",
                border: "1px solid #000",
                color: "#000",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Call Now
            </a>
          </div>

          <p style={{ marginTop: "2rem", color: "#888", fontSize: "0.9rem" }}>
            📍 7/127 Gourlay Rd, Taylors Hill VIC 3037
          </p>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        style={{
          padding: "6rem 2rem",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.6rem", fontWeight: "700" }}>
          Our Services
        </h2>

        <p
          style={{
            color: "#666",
            marginTop: "1rem",
            fontSize: "1.1rem",
          }}
        >
          Tailored hair care designed for confidence, beauty, and precision
        </p>

        {/* GRID */}
        <div
          style={{
            marginTop: "3.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* CARD */}
          <div style={serviceCard}>
            <h3 style={cardTitle}>✂️ Haircuts</h3>
            <p style={cardText}>
              Precision cuts tailored to your face shape and personal style.
            </p>
          </div>

          <div style={serviceCard}>
            <h3 style={cardTitle}>🎨 Colour</h3>
            <p style={cardText}>
              From natural tones to full transformations and balayage artistry.
            </p>
          </div>

          <div style={serviceCard}>
            <h3 style={cardTitle}>✨ Styling</h3>
            <p style={cardText}>
              Blow waves, event styling, and everyday polished looks.
            </p>
          </div>

          <div style={serviceCard}>
            <h3 style={cardTitle}>💆‍♀️ Treatments</h3>
            <p style={cardText}>
              Restore shine, strength, and health with premium care treatments.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Why Choose Salon 93
        </h2>

        <p style={{ color: "#666", marginTop: "1rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          We focus on precision, care, and personalised styling so every client leaves feeling confident and refreshed.
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
          <div style={cardStyle}>
            <h3>💇‍♀️ Expert Stylists</h3>
            <p>Professional experience in women’s cuts, colour & styling.</p>
          </div>

          <div style={cardStyle}>
            <h3>🎨 Personalised Service</h3>
            <p>Every look is tailored to your face shape, hair type, and lifestyle.</p>
          </div>

          <div style={cardStyle}>
            <h3>✨ Premium Products</h3>
            <p>We use high-quality products that protect and nourish your hair.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#000",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Ready for a fresh new look?
        </h2>

        <p
          style={{
            marginTop: "1rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Book your appointment at Salon 93 today and experience professional
          women’s hair care in Taylors Hill.
        </p>

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
              background: "#fff",
              color: "#000",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Book Appointment
          </Link>

          <a
            href="tel:+61383582538"
            style={{
              padding: "0.9rem 1.5rem",
              border: "1px solid #fff",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Call Now
          </a>
        </div>
      </section>
    </>
  );
}