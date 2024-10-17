import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from "../../config"; // Importing the config

export default function SinglePost({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${config.url}/posts/${postId}`); // Using config.url
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div className="singlePost">
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          {/* Add other post details here */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
