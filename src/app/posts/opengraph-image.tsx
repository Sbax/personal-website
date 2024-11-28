import { createImage } from "@/createImage";

export const runtime = "edge";
export const alt = "Matteo Bacci, Posts";

export default async function Image() {
  return createImage({
    title: "Posts",
    subtitle: "/posts",
  });
}
