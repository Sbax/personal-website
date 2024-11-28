import { createImage } from "@/createImage";

export const alt = "Matteo Bacci, Projects";

export default async function Image() {
  return createImage({
    title: "Matteo Bacci",
    subtitle: "/projects",
  });
}
