import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: "0001",
      title: "After the Rain",
      author: "Francesco Lojacono",
      movement: "Sicilian Viewism",
      year: "1884",
      image: "./../src/assets/0001-dopo-la-pioggia-600-448.jpg",
    },
    {
      id: "0002",
      title: "The Starry Night",
      author: "Vincent van Gogh",
      movement: "Post-Impressionism",
      year: "1889",
      image: "./../src/assets/starry_night.jpg",
    },
  ]);
}
