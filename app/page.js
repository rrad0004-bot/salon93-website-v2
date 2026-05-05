import Link from "next/link";

const cardStyle = {
  padding: "2rem",
  border: "1px solid #eee",
  borderRadius: "12px",
  textAlign: "left",
  background: "#fafafa",
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
          padding: "4rem 2rem",
          textAlign: "center",
          background: "linear-gradient(to bottom, #ffffff, #f6f6f6)",
        }}
      >
        <div style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: "700" }}>
            Salon 93
          </h1>

          <p style={{ marginTop: "1rem", fontSize: "1.3rem", color: "#666" }}>
            Luxury hair care, colour & styling in Taylors Hill
          </p>

          <p style={{ marginTop: "1.5rem", color: "#888", fontSize: "1rem" }}>
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

      {/* SERVICES SECTION (NOW CORRECTLY SEPARATE) */}
      <section
        style={{
          padding: "5rem 2rem",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
          Our Services
        </h2>

        <p style={{ color: "#666", marginTop: "1rem" }}>
          Premium hair care tailored for women
        </p>

        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div style={cardStyle}>
            <h3>✂️ Haircuts</h3>
            <p>Precision cuts tailored to your face shape and style.</p>
          </div>

          <div style={cardStyle}>
            <h3>🎨 Colour</h3>
            <p>From subtle tones to full transformations and balayage.</p>
          </div>

          <div style={cardStyle}>
            <h3>✨ Styling</h3>
            <p>Blow waves, event styling, and everyday glam looks.</p>
          </div>

          <div style={cardStyle}>
            <h3>💆‍♀️ Treatments</h3>
            <p>Restore shine, health, and strength to your hair.</p>
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