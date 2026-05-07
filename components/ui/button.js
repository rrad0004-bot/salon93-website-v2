import { colors, radius } from "../../theme";

export function PrimaryButton({ children }) {
    return (
        <button
            style={{
                padding: "1rem 1.6rem",
                background: "linear-gradient(135deg, #111, #1f1f1f)",
                color: "#fff",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.08)",
                cursor: "pointer",
                fontWeight: "600",
                boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.35)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
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
                padding: "1rem 1.6rem",
                background: "transparent",
                color: colors.black,
                border: `1px solid ${colors.border}`,
                borderRadius: radius.pill,
                cursor: "pointer",
                fontWeight: "500",
            }}
        >
            {children}
        </button>
    );
}