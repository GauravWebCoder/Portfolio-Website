import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #08070d 0%, #1a1530 55%, #08070d 100%)",
          color: "#f3f1fb",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 10,
            color: "#a996ff",
            marginBottom: 28,
          }}
        >
          PORTFOLIO
        </div>
        <div style={{ display: "flex", fontSize: 104, fontWeight: 800, gap: 26 }}>
          <span>GAURAV</span>
          <span style={{ color: "#7c66ff" }}>MATHPAL</span>
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 28, color: "rgba(243,241,251,.7)" }}>
          Computer Science Student. Product Builder. Creator
        </div>
      </div>
    ),
    { ...size },
  );
}
