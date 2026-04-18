import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nestaid — AI receptionist for home care",
    short_name: "Nestaid",
    description:
      "AI receptionist and coordinator for home care agencies. Handle calls, coordinate call-outs, and keep schedules moving 24/7.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F6F3",
    theme_color: "#F6F6F3",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
