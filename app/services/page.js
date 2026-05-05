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

                    <div style={box}>
                        <h3>Haircuts</h3>
                        <p>Precision cuts tailored to your style and face shape.</p>
                    </div>

                    <div style={box}>
                        <h3>Colour</h3>
                        <p>From natural tones to full transformations and balayage.</p>
                    </div>

                    <div style={box}>
                        <h3>Styling</h3>
                        <p>Blow waves, events, and everyday styling.</p>
                    </div>

                    <div style={box}>
                        <h3>Treatments</h3>
                        <p>Restore strength, shine, and hair health.</p>
                    </div>

                </div>

            </div>
        </main>
    );
}

const box = {
    padding: "2rem",
    border: "1px solid #eee",
    borderRadius: "12px",
    background: "#fafafa"
};