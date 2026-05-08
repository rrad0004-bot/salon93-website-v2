import { colors, radius } from "../../theme";

export function PrimaryButton({ children }) {
    return (
        <button
            style={{
                padding: "1rem 1.7rem",
                background: colors.primary,
                color: "#fff",
                borderRadius: radius.pill,
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                letterSpacing: "0.3px",
                boxShadow: "0 8px 20px rgba(214,175,175,0.35)",
                transition: "all 0.2s ease, transform 0.15s ease",
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.background = colors.primaryHover;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(214,175,175,0.45)";
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.background = colors.primary;
                e.currentTarget.style.transform = "translateY(0px)";
                e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(214,175,175,0.35)";
            }}
            onTouchStart={(e) => {
                e.currentTarget.style.transform = "scale(0.97)";
            }}

            onTouchEnd={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            {children}
        </button>
    );
}

export function OutlineButton({ children, variant = "light" }) {
    const isDark = variant === "dark";

    return (
        <button
            style={{
                padding: "1rem 1.7rem",
                background: isDark ? "transparent" : "rgba(0,0,0,0.03)",
                color: isDark ? "#fff" : colors.text,
                borderRadius: radius.pill,
                border: isDark
                    ? "1px solid rgba(255,255,255,0.5)"
                    : `1px solid ${colors.border}`,
                cursor: "pointer",
                fontWeight: "500",
                backdropFilter: isDark ? "blur(6px)" : "none",
                transition: "all 0.2s ease, transform 0.15s ease",
            }}
            onMouseOver={(e) => {
                if (isDark) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                } else {
                    e.currentTarget.style.background = "rgba(0,0,0,0.06)";
                }
            }}
            onMouseOut={(e) => {
                if (isDark) {
                    e.currentTarget.style.background = "transparent";
                } else {
                    e.currentTarget.style.background = "rgba(0,0,0,0.03)";
                }
            }}
            onTouchStart={(e) => {
                e.currentTarget.style.transform = "scale(0.97)";
            }}

            onTouchEnd={(e) => {
                e.currentTarget.style.transform = "scale(1)";
            }}
        >
            {children}
        </button>
    );
}