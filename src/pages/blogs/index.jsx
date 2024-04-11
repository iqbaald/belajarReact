import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blogs() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => (
        // <div key={index}>
        //   ({item.id}) {item.title}
        // </div>
        <div key={index}>
          <Link to={`/blogs/${item.id}`}>-{item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blogs;
