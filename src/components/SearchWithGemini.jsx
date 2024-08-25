// src/components/SearchComponent.js

import React, { useState } from "react";
import { searchWithGemini } from "../api/geminiApi";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchWithGemini(query);
      setResults(data.results); // Sesuaikan dengan struktur data dari API Gemini
    } catch (err) {
      setError("Failed to fetch results");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li> // Sesuaikan dengan data yang dikembalikan
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
