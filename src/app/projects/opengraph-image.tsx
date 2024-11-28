import { createImage } from "@/createImage";

export const runtime = "edge";
export const alt = "Matteo Bacci, Projects";

export default async function Image() {
  return createImage({
    title: "Matteo Bacci",
    subtitle: "/projects",
  });
}
