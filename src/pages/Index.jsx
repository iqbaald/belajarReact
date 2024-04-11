import { useState, useEffect } from "react";
import postData from "../posts.json";

import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postData);
  const [totalPost, setTotalPost] = useState(0);
  // const [externalPosts, setExternalPost] = useState([]);

  const onSearchChange = (value) => {
    const filteredPosts = postData.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setPosts(filteredPosts);
    setTotalPost(filteredPosts.length);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setExternalPost(json));
  // }, []);

  useEffect(() => {
    console.log("Postingan telah ditemukan");
  }, [posts]);
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPost={totalPost} />
      {posts.map((props, index) => (
        // <Article title={title} tags={tags} date={date} />
        // <Article {...{ title, tags, date }} key={index} />
        <Article {...props} key={index} />
      ))}
      {/* <h2>External Posts</h2>
      {externalPosts.map((item, index) => (
        <div key={index}>
          ({item.id}) {item.title}
        </div>
      ))} */}
    </>
  );
}

export default Homepage;
