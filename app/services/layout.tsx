import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autobikes.ID - Find Your Dream Bikes | Services",
  description: "Page for see about the service",
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
