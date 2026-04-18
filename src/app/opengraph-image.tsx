import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nestaid — AI receptionist & coordinator for home care agencies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top left, #FDE6D6 0%, #F6F6F3 55%, #F1EFEA 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "32px",
            fontWeight: 600,
            color: "#0A0A0A",
            letterSpacing: "-0.01em",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "#F4C6AC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0A0A0A",
              fontWeight: 700,
            }}
          >
            N
          </div>
          Nestaid
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "74px",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#0A0A0A",
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            AI receptionist &amp; coordinator
            <br />
            for home care agencies.
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#4A4A4A",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Handle inbound calls, coordinate call-outs, and keep schedules moving 24/7 with Nessa.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#4A4A4A",
          }}
        >
          <span>www.nestaid.us</span>
          <span style={{ color: "#0A0A0A", fontWeight: 500 }}>Powered by Nessa AI</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
