export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">
          Executive Operations Hub
        </h1>

        <p className="mt-2 text-slate-600">
          AI-Powered Executive Assistant Dashboard
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg">Today's Tasks</h2>
            <p className="mt-3 text-slate-500">No tasks yet.</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg">Calendar</h2>
            <p className="mt-3 text-slate-500">No upcoming meetings.</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg">AI Assistant</h2>
            <p className="mt-3 text-slate-500">
              Ready to assist.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}