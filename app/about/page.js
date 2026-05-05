export default function About() {
    return (
        <main style={{ padding: "5rem 2rem" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    About Salon 93
                </h1>

                <p style={{ marginTop: "1.5rem", fontSize: "1.2rem", color: "#555", lineHeight: "1.7" }}>
                    Salon 93 is a premium women’s hair salon located in Taylors Hill,
                    dedicated to delivering high-quality, personalised hair services.
                </p>

                <p style={{ marginTop: "1rem", color: "#666", lineHeight: "1.7" }}>
                    We specialise in colour transformations, precision cutting, styling,
                    extensions, and restorative treatments. Every client experience is
                    tailored to enhance natural beauty while maintaining hair health.
                </p>

                <div style={{ marginTop: "3rem", padding: "2rem", background: "#fafafa", borderRadius: "12px" }}>
                    <h3 style={{ marginBottom: "1rem" }}>Our Philosophy</h3>
                    <p style={{ color: "#666", lineHeight: "1.7" }}>
                        We believe great hair is not just about style — it's about confidence.
                        Our approach is personal, detailed, and focused on long-term hair health.
                    </p>
                </div>

            </div>
        </main>
    );
}