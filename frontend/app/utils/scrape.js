const { VITE_ROOT_API, VITE_SCRAPE_API, VITE_ORIGIN } = import.meta.env || {};

export default async (searchQuery) => {
  const res = await fetch(`${VITE_ORIGIN}${VITE_ROOT_API}${VITE_SCRAPE_API}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ s: searchQuery }),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
