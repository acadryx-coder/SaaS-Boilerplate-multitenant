'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

export default function CreateInstitution() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [logo, setLogo] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/institution/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subdomain, logo, primaryColor }),
      });

      if (!res.ok) throw new Error('Failed to create institution');

      const data = await res.json();
      router.push(`/admin/institution/${data.id}/dashboard`);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Create New School</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">School Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Subdomain</label>
          <input
            type="text"
            value={subdomain}
            onChange={(e) => setSubdomain(e.target.value)}
            required
            className="w-full border rounded p-2"
            placeholder="example.kogbodi.school"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Logo URL</label>
          <input
            type="text"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Optional"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Primary Color</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-16 h-10 p-0 border-none"
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create School'}
        </button>
      </form>
    </div>
  );
    }
