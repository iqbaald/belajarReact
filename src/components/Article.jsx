import { useContext } from "react";
import { GlobalContext } from "../context";

const ArticleStatus = ({ isNew }) => {
  return isNew && <small> -- Baru -- </small>;
};

// const NewArticle = () => {
//   return <small> -- Dong -- </small>;
// };

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      {/* <small>{props.isNew && "  -- Baru -- "}</small> */}
      <ArticleStatus isNew={props.isNew} />
      {/* {props.isNew && <NewArticle />} */}
      <div>
        <small>
          Date: {props.date} <br />
          Tags: {props.tags.join(", ")}
        </small>
        <div>
          <small>Dibuat oleh {user.username}</small>
        </div>
      </div>
    </>
  );
}

export default Article;
