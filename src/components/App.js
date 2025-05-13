import React from "react";
import "./../styles/App.css";
import CachedPosts from "./CachedPosts";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <CachedPosts></CachedPosts>
    </div>
  );
};

export default App;
