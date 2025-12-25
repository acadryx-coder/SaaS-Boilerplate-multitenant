import Link from 'next/link';
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 font-bold text-lg">Acadryx Admin</div>
        <nav className="px-4 space-y-2">
          <Link
            href="/admin"
            className="block px-3 py-2 rounded hover:bg-gray-100"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/institution/create"
            className="block px-3 py-2 rounded hover:bg-gray-100"
          >
            Create Institution
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
            }
