import config from "../../config";
import Header from "../../components/header/Header";
import { useState, useEffect } from 'react';
import axios from "axios";
import "./home.css";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      try {  
        const res = await axios.get("/posts"+search);
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
      {/* <Posts posts={posts} />  */}
      
      </div>
    </>
  );
}
