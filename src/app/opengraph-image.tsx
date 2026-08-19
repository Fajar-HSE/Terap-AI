import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — AI Consulting & Implementation`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#121715",
          color: "#f6f5f1",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#0e5f52",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 20,
                height: 28,
                borderRadius: 6,
                border: "3px solid #e3efea",
              }}
            />
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -1 }}>
            {site.name}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 880,
          }}
        >
          <div style={{ fontSize: 16, letterSpacing: 3, color: "#8fd1c2" }}>
            AI CONSULTING & IMPLEMENTATION
          </div>
          <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            AI yang bekerja nyata untuk bisnis Anda
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 20,
            color: "#b9c1bc",
          }}
        >
          <span>Konsultasi</span>
          <span style={{ width: 5, height: 5, borderRadius: 99, backgroundColor: "#0e5f52" }} />
          <span>Implementation</span>
          <span style={{ width: 5, height: 5, borderRadius: 99, backgroundColor: "#0e5f52" }} />
          <span>Training</span>
        </div>
      </div>
    ),
    size,
  );
}