import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

export const alt = "Nestaid — AI-native platform for home care agencies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Embed the real logo as a data URI so it renders reliably at build time
// (no network fetch, no missing-asset risk in the serverless image runtime).
const logoData = readFileSync(join(process.cwd(), "public", "logomain.jpg"));
const logoSrc = `data:image/jpeg;base64,${logoData.toString("base64")}`;
const LOGO_HEIGHT = 60;
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * 1767) / 637); // preserve aspect ratio

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
          background: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Nestaid" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "74px",
              fontWeight: 600,
              lineHeight: 1.05,
              color: "#0A0A0A",
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
            }}
          >
            <span>
              The&nbsp;<span style={{ color: "#F58D42" }}>AI-native</span>&nbsp;platform
            </span>
            <span>for home care agencies.</span>
          </div>
          <div
            style={{
              fontSize: "27px",
              color: "#4A4A4A",
              maxWidth: "1040px",
              lineHeight: 1.4,
              whiteSpace: "nowrap",
            }}
          >
            One platform for calls, scheduling, onboarding &amp; coordination, 24/7.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                background: "#0A0A0A",
                color: "#FFFFFF",
                padding: "16px 28px",
                borderRadius: "14px",
                fontSize: "26px",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Book a free demo →
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "22px",
                color: "#4A4A4A",
              }}
            >
              30-minute walkthrough
            </div>
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
