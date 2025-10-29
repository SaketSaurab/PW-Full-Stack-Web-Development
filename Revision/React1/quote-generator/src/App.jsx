import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);

      setError("");
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      setError("Fail to load the quote. Please try again");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="app">
        <div className="quote-box">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && (
            <>
              <p className="quote">❝ {quote} ❞</p>
              <p className="author">{author}</p>
            </>
          )}
          <></>
        </div>
        <button onClick={() => navigator.clipboard.writeText(quote)}>
          Copy Quote
        </button>
        <button onClick={fetchQuote} disabled={loading}>
          {loading ? "Fetching..." : "New Quote"}
        </button>
      </div>
    </>
  );
}

export default App;
