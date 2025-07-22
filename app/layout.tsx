import './globals.css';

export const metadata = {
  title: 'OrbitOps',
  description: 'AI-powered booking + CRM platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
