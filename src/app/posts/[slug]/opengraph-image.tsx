import { loadPostData } from "@/lib/posts";
import fs from "fs";
import { ImageResponse } from "next/og";
import path from "path";

export const alt = "Matteo Bacci, Posts";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await loadPostData(params.slug);
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
          padding: "2rem",
          textAlign: "center",
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

        <h1 style={{ fontSize: 64 }}>{post.title}</h1>
        <p style={{ fontSize: 36 }}>{post.summary}</p>
        <p style={{ fontSize: 36 }}>mb.maletta.space</p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "IPS",
          data: await fontData,
          weight: 400,
        },
      ],
    }
  );
}
