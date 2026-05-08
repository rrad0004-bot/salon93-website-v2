import { colors, radius, shadows } from "../../theme";

export function Card({ children }) {
    return (
        <div
            style={{
                padding: "2rem",
                borderRadius: radius.large,
                border: `1px solid ${colors.border}`,
                background: colors.bg,
                boxShadow: shadows.soft,
                transition: "all 0.25s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.08)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow = shadows.soft;
            }}
        >
            {children}
        </div>
    );
}