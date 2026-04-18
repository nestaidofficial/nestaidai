import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F6F3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "132px",
            height: "132px",
            borderRadius: "32px",
            background: "#F4C6AC",
            color: "#0A0A0A",
            fontSize: "92px",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-0.02em",
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size }
  );
}
