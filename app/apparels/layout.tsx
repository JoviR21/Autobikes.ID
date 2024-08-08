import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autobikes.ID - Find Your Dream Bikes | Apparels",
  description: "Page for see buy apparels",
};

export default function MotorcycleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
