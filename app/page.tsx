import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Acadryx
        </h1>
        <p className="text-gray-600">
          Academic identity, community, and infrastructure — built for schools,
          students, and alumni.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/admin"
            className="px-6 py-3 bg-blue-600 text-white rounded font-medium hover:bg-blue-700"
          >
            Admin Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
