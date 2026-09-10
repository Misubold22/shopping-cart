const requestCache = new Map();

const fetchWithCache = (url) => {
  if (!requestCache.has(url)) {
    console.log("cache miss:", url);
    requestCache.set(url, fetchJson(url));
  } else {
    console.log("cache hit:", url);
  }
  return requestCache.get(url);
};

const fetchJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
};

//export default fetchWithCache;

export async function fetchJsonWithCache() {
  return fetchWithCache("https://dummyjson.com/products/category/groceries");
}

export default fetchJsonWithCache;
