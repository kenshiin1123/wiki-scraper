const MAX_PAYLOAD_SIZE = 500; // Adjust this based on your needs

const contentsLimiter = (content) => {
  if (Array.isArray(content)) {
    return content.slice(0, MAX_PAYLOAD_SIZE); // Works for arrays
  } else if (typeof content === "string") {
    return content.substring(0, MAX_PAYLOAD_SIZE); // Works for strings
  } else {
    return content; // Return as-is for other types
  }
};

export default contentsLimiter;
