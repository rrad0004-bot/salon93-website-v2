import { colors, radius, shadows } from "../../theme";

export function Card({ children }) {
    return (
        <div
            style={{
                padding: "2rem",
                borderRadius: radius.medium,
                border: `1px solid ${colors.border}`,
                background: colors.bg,
                boxShadow: shadows.soft,
            }}
        >
            {children}
        </div>
    );
}