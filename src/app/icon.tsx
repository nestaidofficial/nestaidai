import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          background: "#F4C6AC",
          color: "#0A0A0A",
          fontSize: "22px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
