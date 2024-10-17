import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Post from '../../components/post/Post';
import "./posts.css";
import config from '../../config'; // Import config file

export default function PostComp() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Use the dynamic backend URL from config
        const res = await axios.get(`${config.url}/api/posts${search}`);
        setPosts(res.data); // Assuming your data is in the 'data' property
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts(); // Call the fetchPosts function
  }, [search]); // Dependency array includes 'search' to update when search query changes

  console.log(posts);

  return (
    <div className="posts">
      <div className="posts-in">
        {/* Map over the posts array and render each Post component */}
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
