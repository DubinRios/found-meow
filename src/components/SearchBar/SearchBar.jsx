// SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder={t("Encuentra un gatito...")}
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