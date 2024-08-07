import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autobikes.ID - Find Your Dream Bikes | Motorcycles",
  description: "Dealer Bikes",
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
