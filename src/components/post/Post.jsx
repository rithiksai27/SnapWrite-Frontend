import "./post.css";
import { Link } from "react-router-dom";
import config from "../../config"; // Importing the config file

export default function Post({ post }) {
  const handleClick = (post_id) => {
    window.location = `${config.url}/posts/${post_id}`; // Using config.url for the backend URL
  };

  // Use the backend URL from the config file instead of environment variables
  const PF = `${config.url}/images/`; // Using config.url for the image path

  return (
    <div className="post" onClick={() => handleClick(post._id)}>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span key={c._id} className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
