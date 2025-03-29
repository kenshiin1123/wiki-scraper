const { VITE_ROOT_API, VITE_SUMMARIZE_API, VITE_ORIGIN } =
  import.meta.env || {};
import contentsLimiter from "./contentsLimiter";

export default async (content) => {
  content = contentsLimiter(content);

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
