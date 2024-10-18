import "./post.css";
import { Link } from "react-router-dom";
import config from "../../config"; // Importing the config file

export default function Post({ post }) {

    const handleClick = (post_id) => {
      window.location = `/posts/${post_id}`;
    };

  const PF = `${config.url}/api/images/`; // Using the config URL
  return (
    <div className="post" onClick={() => handleClick(post._id)}>
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat" key={c._id}>{c.name}</span> // Added key prop for uniqueness
          ))}
        </div>
        <Link to={`/posts/${post._id}`} className="link"> {/* Changed to /posts/${post._id} */}
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
