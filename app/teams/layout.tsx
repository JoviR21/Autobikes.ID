import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autobikes.ID - Find Your Dream Bikes | Teams",
  description: "Page for see about the teams",
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
