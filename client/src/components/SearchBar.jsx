import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
const startVoiceSearch = () => {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Voice search is not supported in this browser");
    return;
  }

  const recognition = new window.webkitSpeechRecognition();

  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
  const speechText =
    event.results[0][0].transcript;

  setQuery(speechText);

  onSearch(speechText);
};
};

  const handleSubmit = () => {
    if (!query.trim()) return;

    onSearch(query);
  };

  return (
    <div
      style={{
        width: "500px",
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "14px",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={query}
        placeholder="Search here"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        style={{
          border: "none",
          outline: "none",
          flex: 1,
          fontSize: "16px",
        }}
      />

      <button
  onClick={handleSubmit}
  style={{
    border: "none",
    background: "#5B6CFF",
    color: "white",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  }}
>
  Send
</button>

<button
  onClick={startVoiceSearch}
  style={{
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "22px",
  }}
>
  🎤
</button>
    </div>
  );
}