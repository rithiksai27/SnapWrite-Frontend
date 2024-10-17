import "./single.css"
import SinglePost from "../../components/singlepost/Singlepost";
import { useParams } from 'react-router-dom';

export default function Single() {

  const { id } = useParams();


  return (
    <div className="single">
        <SinglePost postId={id}/>
    </div>
  )
}
