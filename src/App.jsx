import { useEffect, useState } from 'react';
import { getCats } from './services/catApiServices';
import './App.css'

function App() {

  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    async function fetchCat() {
      try {
        const data = await getCats();
        if (data && data.length > 0) {
          setCatImage(data[0].url);
        }
      } catch (error) {
        console.error('Error fetching cat:', error);
      }
    }

    fetchCat();
  }, []);

  return (
    <>
      <h1>Hola Cadiz</h1>
       <h1>🐱 Random Cat</h1>
      {catImage ? (
        <img src={catImage} alt="Random cat" width="300" />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
