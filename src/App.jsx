import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const API_URL = "https://api.freeapi.app/api/v1/public/randomusers";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

const fetchUsers = async (pageNum = 1) => {
  try {
    setLoading(true);
    setError("");

    const res = await fetch(
      `https://api.freeapi.app/api/v1/public/randomusers?page=${pageNum}&limit=12`
    );

    if (!res.ok) throw new Error("Failed to fetch");

    const data = await res.json();

    setUsers(data.data.data);
    setPage(data.data.page);

  } catch (err) {
    setError("Something went wrong 😢");
  } finally {
    setLoading(false);
  }
};

const shuffleUsers = () => {
  const shuffled = [...users].sort(() => Math.random() - 0.5);
  setUsers(shuffled);
};

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Get Random Users info with React & Tailwind CSS
      </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={shuffleUsers}
          className="bg-blue-500 px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          Refresh Users
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      {/* Users Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {!loading &&
          users.map((user) => (
            <UserCard key={user.login.uuid} user={user} />
          ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">

        <button
          onClick={() => fetchUsers(page - 1)}
          disabled={page === 1}
          className="bg-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">Page {page}</span>

        <button
          onClick={() => fetchUsers(page + 1)}
          className="bg-gray-700 px-4 py-2 rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default App;