// SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Buscar gatitos, por ciudad, raza, etc..."
          value={query}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          🔍︎
        </button>
      </form>
    </div>
  );
};

export default SearchBar;