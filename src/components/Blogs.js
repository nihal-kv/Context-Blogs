import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "./Card";
import './Blogs.css';
const Blogs=()=>{
    const {posts}=useContext(AppContext);
    return (
        
        <div className="blogs">
            {posts.map((post)=>(<Card key={post.id} post={post}/>))}
        </div>
        
    )
}

export default Blogs;