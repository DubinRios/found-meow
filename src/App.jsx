import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const handleSearch = (query) => {
    console.log("Buscando:", query);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch}/>
    </div>
  );
};

export default App;
