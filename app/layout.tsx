import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'OrbitOps',
  description: 'Next-gen AI booking and ops system',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
