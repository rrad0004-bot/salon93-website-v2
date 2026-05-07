import { colors, radius } from "../../theme";

export function PrimaryButton({ children }) {
    return (
        <button
            style={{
                padding: "1rem 1.7rem",
                background: "linear-gradient(135deg, #2b2b2b, #111)",
                color: "#fff",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                fontWeight: "600",
                letterSpacing: "0.3px",
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                transition: "all 0.25s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.35)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
            }}
        >
            {children}
        </button>
    );
}

export function OutlineButton({ children }) {
    return (
        <button
            style={{
                padding: "1rem 1.7rem",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.35)",
                cursor: "pointer",
                fontWeight: "500",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
            }}
        >
            {children}
        </button>
    );
}