const apiKey = import.meta.env.VITE_API_KEY;

export async function getCats() {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apiKey}&has_breeds=1`, {
  });

  const data = await response.json();
  console.log(data)
  return data;
}