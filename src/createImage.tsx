import fs from "fs";
import { ImageResponse } from "next/og";
import path from "path";

type ImageProps = {
  title?: string;
  subtitle?: string;
};

const defaultTitle = "Matteo Bacci";

export const size = {
  width: 1200,
  height: 630,
};

export async function createImage({ title, subtitle }: ImageProps) {
  const fontPath = path.resolve(process.cwd(), "./src/app/fonts/ips.woff");
  const fontData = fs.readFileSync(fontPath);

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E1E1E",
          color: "#D0D0D0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: "45rem",
            position: "absolute",
            right: 0,
            bottom: -20,
            color: "#878787",
            opacity: 0.1,
          }}
        >
          ░
        </p>

        <h1 style={{ fontSize: 64 }}>
          {title ? `${defaultTitle}, ${title}` : defaultTitle}
        </h1>
        <p style={{ fontSize: 36 }}>mb.maletta.space</p>
        {subtitle && <p style={{ fontSize: 36 }}>{subtitle}</p>}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "IPS",
          data: await fontData,
        },
      ],
    }
  );
}
