import React, { createContext, useState, useEffect } from "react";

export const NewsletterContext = createContext();

export const NewsletterContextProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://uniguide-2fe6c.web.app/newsletter.json?nocache=${Date.now()}`,
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("Failed to fetch newsletter");

      const data = await res.json();
      setArticles(data.articles || []);
      setUpdatedAt(data.updatedAt || null);
      setError(null);
    } catch (err) {
      console.error("❌ Newsletter fetch error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsletterContext.Provider
      value={{
        articles,
        updatedAt,
        loading,
        error,
        fetchNews,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};
