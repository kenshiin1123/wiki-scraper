const { VITE_ROOT_API, VITE_SUMMARIZE_API, VITE_ORIGIN } =
  import.meta.env || {};

const MAX_PAYLOAD_SIZE = 1000; // Adjust this value based on your payload limit

export default async (content) => {
  if (content.length > MAX_PAYLOAD_SIZE) {
    content = content.substring(0, MAX_PAYLOAD_SIZE);
  }

  const res = await fetch(
    `${VITE_ORIGIN}${VITE_ROOT_API}${VITE_SUMMARIZE_API}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: content }),
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
