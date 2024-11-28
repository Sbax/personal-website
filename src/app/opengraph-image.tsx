import { createImage } from "@/createImage";

export const runtime = "edge";
export const alt = "Matteo Bacci";

export default async function Image() {
  return createImage({});
}
