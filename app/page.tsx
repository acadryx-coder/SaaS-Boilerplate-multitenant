export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Acadryx</h1>
        <p className="text-gray-600">
          Your school. Your people. Your lifelong community.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <a
            href="/admin/institution/create"
            className="px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Create a School
          </a>
        </div>
      </div>
    </main>
  );
}
