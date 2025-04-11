import { useEffect, useRef, useState } from "react";

export const fakeData = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
];

export const useGetData = () => {
  const [data, setData] = useState<DisplayData[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(sampleDisplayData);
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
};

export interface DisplayData {
  id: string;
  title: string;
  subtitle: string;
  hexColor: string;
}

export const sampleDisplayData: DisplayData[] = [
  {
    id: "id1",
    title: "Sunset Vibes",
    subtitle: "Warm and cozy tones",
    hexColor: "#FF6F61",
  },
  {
    id: "id2",
    title: "Ocean Breeze",
    subtitle: "Cool blues for calm minds",
    hexColor: "#00BFFF",
  },
  {
    id: "id3",
    title: "Mint Splash",
    subtitle: "Fresh and clean look",
    hexColor: "#98FF98",
  },
  {
    id: "id4",
    title: "Midnight Sky",
    subtitle: "Dark theme mode",
    hexColor: "#191970",
  },
  {
    id: "id5",
    title: "Lemon Zest",
    subtitle: "Bright and happy",
    hexColor: "#FFF44F",
  },
  {
    id: "id6",
    title: "Crimson Charm",
    subtitle: "Bold and vibrant",
    hexColor: "#DC143C",
  },
  {
    id: "id7",
    title: "Peachy Keen",
    subtitle: "Soft and sweet tones",
    hexColor: "#FFDAB9",
  },
  {
    id: "id8",
    title: "Electric Lime",
    subtitle: "Neon and wild",
    hexColor: "#CCFF00",
  },
  {
    id: "id9",
    title: "Lavender Dreams",
    subtitle: "Soothing purples",
    hexColor: "#E6E6FA",
  },
  {
    id: "id10",
    title: "Steel Blue",
    subtitle: "Professional and clean",
    hexColor: "#4682B4",
  },
  {
    id: "id11",
    title: "Rose Gold",
    subtitle: "Elegant and trendy",
    hexColor: "#B76E79",
  },
  {
    id: "id12",
    title: "Forest Walk",
    subtitle: "Natural greens",
    hexColor: "#228B22",
  },
  {
    id: "id13",
    title: "Coral Reef",
    subtitle: "Beachy and tropical",
    hexColor: "#FF7F50",
  },
  {
    id: "id14",
    title: "Slate Gray",
    subtitle: "Minimalist vibes",
    hexColor: "#708090",
  },
  {
    id: "id15",
    title: "Golden Hour",
    subtitle: "Soft orange hues",
    hexColor: "#FFA500",
  },
  {
    id: "id16",
    title: "Bubblegum Pop",
    subtitle: "Fun and energetic",
    hexColor: "#FF69B4",
  },
  {
    id: "id17",
    title: "Deep Teal",
    subtitle: "Modern and moody",
    hexColor: "#008080",
  },
  {
    id: "id18",
    title: "Ivory Elegance",
    subtitle: "Clean and crisp",
    hexColor: "#FFFFF0",
  },
  {
    id: "id19",
    title: "Charcoal Dust",
    subtitle: "Dark mode base",
    hexColor: "#36454F",
  },
  {
    id: "id20",
    title: "Skyline Glow",
    subtitle: "Urban twilight",
    hexColor: "#6495ED",
  },
];
