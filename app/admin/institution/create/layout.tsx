import React from 'react';

export const metadata = {
  title: 'Create Institution',
  description: 'Admin panel to create a new school/institution',
};

export default function CreateInstitutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">Create Institution</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}
