// Remove 'use client' directive
import React from 'react';

export const metadata = {
  title: 'Institution Admin',
  description: 'Admin panel for institutions',
};

export default function InstitutionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">Institution Admin Panel</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
