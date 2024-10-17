import "./single.css";
import SinglePost from "../../components/singlepost/Singlepost";
import { useParams } from 'react-router-dom';

export default function Single() {
  const { id } = useParams();  // Get post ID from URL parameters

  return (
    <div className="single">
      <SinglePost postId={id} />  {/* Pass postId to SinglePost */}
    </div>
  );
}
