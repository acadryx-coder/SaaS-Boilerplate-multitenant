export default function AdminHomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Admin Console</h1>
        <p className="text-gray-600">
          Manage institutions, branches, users, and systems.
        </p>

        <a
          href="/admin/institution/create"
          className="inline-block mt-4 px-6 py-3 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Create Institution
        </a>
      </div>
    </main>
  );
}
