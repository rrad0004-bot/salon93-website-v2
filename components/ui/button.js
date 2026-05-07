import { colors, radius } from "../../theme";

export function PrimaryButton({ children }) {
    return (
        <button
            style={{
                padding: "1rem 1.6rem",
                background: colors.black,
                color: colors.white,
                borderRadius: radius.pill,
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
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