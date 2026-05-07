import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                background: "#0f0f0f",
                color: "#fff",
                padding: "4rem 2rem",
                marginTop: "5rem",
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "2rem",
                }}
            >
                {/* BRAND */}
                <div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                        Salon 93
                    </h2>
                    <p style={{ marginTop: "1rem", color: "#aaa", lineHeight: "1.6" }}>
                        Luxury women’s hair salon in Taylors Hill. Specialising in colour,
                        cuts, styling and treatments.
                    </p>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 style={{ marginBottom: "1rem" }}>Contact</h3>
                    <p style={{ color: "#aaa" }}>📍 7/127 Gourlay Rd, Taylors Hill VIC</p>
                    <p style={{ color: "#aaa" }}>📞 +61 3 8358 2538</p>
                    <p style={{ color: "#aaa" }}>✉️ hello@salon93.com.au</p>
                </div>

                {/* HOURS */}
                <div>
                    <h3 style={{ marginBottom: "1rem" }}>Trading Hours</h3>
                    <p style={{ color: "#aaa" }}>Mon - Fri: 9am - 6pm</p>
                    <p style={{ color: "#aaa" }}>Sat: 9am - 4pm</p>
                    <p style={{ color: "#aaa" }}>Sun: Closed</p>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 style={{ marginBottom: "1rem" }}>Quick Links</h3>

                    <Link href="/about" style={{ color: "#aaa", display: "block" }}>
                        About
                    </Link>
                    <Link href="/services" style={{ color: "#aaa", display: "block" }}>
                        Services
                    </Link>
                    <Link href="/contact" style={{ color: "#aaa", display: "block" }}>
                        Book Appointment
                    </Link>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div
                style={{
                    marginTop: "3rem",
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "1.5rem",
                    textAlign: "center",
                    color: "#666",
                    fontSize: "0.85rem",
                }}
            >
                © 2026 Salon 93. All rights reserved.
            </div>
        </footer>
    );
}