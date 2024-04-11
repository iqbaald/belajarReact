import { useLoaderData } from "react-router-dom";

function SinglePost() {
  // sebelum memakai loaders
  // const params = useParams();
  // const [post, setPost] = useState(null);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  //     .then((response) => response.json())
  //     .then((json) => setPost(json));
  // }, []);
  const post = useLoaderData();
  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;
