import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import axios from 'axios'; // Import axios

import Post from '../../components/post/Post'; // Import Post from the correct path

import "./posts.css";
import config from '../../config'; // Import config file

export default function PostComp() {

  const [post, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3002/api/posts");
        console.log(res);
        setPosts(res.data); // Assuming your data is in the 'data' property
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts(); // Move this inside the useEffect block

  }, []); // Empty dependency array to run only once when component mounts


  console.log(post);

  return (
    <div className="posts">
       <div className="posts-in">
          {/* Map over the posts array and render each Post component */}
          {post.map((post) => (
            <Post key={post._id} post={post} />
          ))}
       </div>
    </div>
  );
}
