import { createImage } from "@/createImage";

export const alt = "Matteo Bacci, Posts";

export default async function Image() {
  return createImage({
    title: "Posts",
    subtitle: "/posts",
  });
}
