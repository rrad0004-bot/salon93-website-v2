export default function Contact() {
    return (
        <main style={{ padding: "5rem 2rem" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>

                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    Contact Us
                </h1>

                <p style={{ marginTop: "1rem", color: "#666" }}>
                    Book an appointment or get in touch with Salon 93.
                </p>

                <div style={card}>
                    <p><strong>Phone:</strong> (03) 8358 2538</p>
                    <p><strong>Address:</strong> 7/127 Gourlay Rd, Taylors Hill VIC</p>
                </div>

                <a
                    href="tel:0383582538"
                    style={{
                        display: "inline-block",
                        marginTop: "2rem",
                        padding: "1rem 1.5rem",
                        background: "#000",
                        color: "#fff",
                        borderRadius: "8px",
                        textDecoration: "none"
                    }}
                >
                    Call Now
                </a>

            </div>
        </main>
    );
}

const card = {
    marginTop: "2rem",
    padding: "2rem",
    borderRadius: "12px",
    background: "#fafafa",
    border: "1px solid #eee"
};