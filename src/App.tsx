import { useState, useEffect } from "react";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projelerim
        </h1>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg dark:bg-red-900/30">
            <p className="text-red-800 dark:text-red-200 font-medium">Hata: {error}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Proje ara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-64 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors cursor-pointer ${
                  category === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {cat === "all" ? "Tümü" : cat.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="flex gap-2 ml-auto">
            <select
              value={sortField}
              onChange={e => setSortField(e.target.value as SortField)}
              className="border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none"
            >
              <option value="year">Yıl</option>
              <option value="title">Başlık</option>
            </select>
            <button
              onClick={() => setSortOrder(o => (o === "asc" ? "desc" : "asc"))}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg font-medium cursor-pointer"
            >
              {sortOrder === "asc" ? "A-Z" : "Z-A"}
            </button>
          </div>
        </div>

        {loading && <p className="text-center text-gray-500 font-medium">Projeler yükleniyor...</p>}
        
        {!loading && filtered.length === 0 && (
          <p className="text-center text-gray-500 font-medium">Eşleşen proje bulunamadı.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 dark:border-gray-800">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2.5 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4 font-medium border-t border-gray-100 dark:border-gray-800 pt-3">
                  {project.year} &middot; {project.category.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8 text-center font-medium">
          {filtered.length} / {projects.length} proje gösteriliyor
        </p>
      </div>
    </div>
  );
}