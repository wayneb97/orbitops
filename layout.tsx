export const metadata = {
  title: "OrbitOps",
  description: "AI Booking & CRM Suite",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
