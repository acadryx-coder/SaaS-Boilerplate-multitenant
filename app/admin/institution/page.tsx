'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function InstitutionPage() {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Institutions Dashboard</h1>
      <p className="mb-6">Manage all institutions here.</p>
      <button
        onClick={() => router.push('/admin/institution/create')}
        className="bg-blue-600 text-white font-semibold px-6 py-2 rounded"
      >
        Create New Institution
      </button>
    </div>
  );
}
