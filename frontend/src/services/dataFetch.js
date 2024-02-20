export async function fetchFull(query) {
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

export async function fetchFuzzy(query) {
  //console.log('Backend server URL:', import.meta.env.VITE_BACKEND_SERVER_URL);
  const url = `${import.meta.env.VITE_BACKEND_SERVER_URL}/fuzzySearch?q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error);
  }
}

export async function fetchPhrase(query) {
  //console.log('Backend server URL:', import.meta.env.VITE_BACKEND_SERVER_URL);
  const url = `${import.meta.env.VITE_BACKEND_SERVER_URL}/phraseSearch?q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error);
  }
}

export async function fetchProximity(query) {
  //console.log('Backend server URL:', import.meta.env.VITE_BACKEND_SERVER_URL);
  const url = `${import.meta.env.VITE_BACKEND_SERVER_URL}/proximitySearch?q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error);
  }
}

export async function fetchSearch(query) {
  const url = `${import.meta.env.VITE_BACKEND_SERVER_URL}/search?q=${encodeURIComponent(query)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchData:', error);
  }
}