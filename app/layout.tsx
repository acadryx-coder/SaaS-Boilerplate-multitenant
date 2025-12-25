import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Acadryx',
  description: 'Acadryx — your school, your people, your lifelong community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
