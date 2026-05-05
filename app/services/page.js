export default function Services() {
    return (
        <main style={{ padding: "5rem 2rem" }}>
            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

                <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
                    Our Services
                </h1>

                <p style={{ marginTop: "1rem", color: "#666", fontSize: "1.1rem" }}>
                    Premium hair services tailored for women
                </p>

                <div style={{
                    marginTop: "3rem",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "2rem"
                }}>

                    {/* HAIRCUTS */}
                    <div style={box}>
                        <img src="/images/haircut.jpg" style={imgStyle} />
                        <h3>Haircuts</h3>
                        <p>Precision cuts tailored to your style and face shape.</p>
                    </div>

                    {/* COLOUR */}
                    <div style={box}>
                        <img src="/images/colour.jpg" style={imgStyle} />
                        <h3>Colour</h3>
                        <p>From natural tones to full transformations and balayage.</p>
                    </div>

                    {/* STYLING */}
                    <div style={box}>
                        <img src="/images/styling.jpg" style={imgStyle} />
                        <h3>Styling</h3>
                        <p>Blow waves, events, and everyday styling.</p>
                    </div>

                    {/* TREATMENTS */}
                    <div style={box}>
                        <img src="/images/treatment.jpg" style={imgStyle} />
                        <h3>Treatments</h3>
                        <p>Restore strength, shine, and hair health.</p>
                    </div>

                </div>

            </div>
        </main>
    );
}

/* CARD STYLE */
const box = {
    padding: "1.5rem",
    border: "1px solid #eee",
    borderRadius: "12px",
    background: "#fafafa",
    transition: "0.2s ease",
};

/* IMAGE STYLE */
const imgStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    objectPosition: "top",
    borderRadius: "10px",
    marginBottom: "1rem"
};