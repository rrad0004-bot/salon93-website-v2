export default function Contact() {
    return (
        <section style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>

            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                Contact Salon 93
            </h1>

            <p style={{ color: "#666", marginBottom: "2rem" }}>
                Get in touch to book an appointment or ask a question.
            </p>

            <div style={{ lineHeight: "1.8" }}>
                <p><strong>Phone:</strong> (03) 8358 2538</p>
                <p><strong>Address:</strong> 7/127 Gourlay Rd, Taylors Hill VIC 3037</p>
                <p><strong>Services:</strong> Women’s cuts, colour, styling, extensions, treatments</p>
            </div>

            <div style={{ marginTop: "2rem" }}>
                <a
                    href="tel:0383582538"
                    style={{
                        display: "inline-block",
                        padding: "0.8rem 1.2rem",
                        background: "#000",
                        color: "#fff",
                        borderRadius: "6px",
                        textDecoration: "none"
                    }}
                >
                    Call Now
                </a>
            </div>

        </section>
    );
}