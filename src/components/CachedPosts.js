import React, { useState, useEffect, useMemo } from "react";

const CachedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error");
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);

  let filteredData = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  return (
    <div>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />

      <div>{isLoading && "Loading..."}</div>
      {filteredData.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default CachedPosts;
