export async function fetchData(query) {
  //console.log('Backend server URL:', import.meta.env.VITE_BACKEND_SERVER_URL);
  const url = `${import.meta.env.VITE_BACKEND_SERVER_URL}/fullTextSearch?q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error);
  }
}
