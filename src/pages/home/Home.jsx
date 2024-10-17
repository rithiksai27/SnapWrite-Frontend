import config from "../../config"; // Import the config file for the backend URL
import Header from "../../components/header/Header";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${config.url}/posts${search}`); // Use config.url here
        setPosts(res.data); // Assuming your data is in the 'data' property
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts(); 
  }, [search]); 

  return (
    <>
      <Header />
      <div className="home">
        {/* Map over the posts array and render each post */}
        {posts.map((post) => (
          <div key={post._id} className="post">
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}
