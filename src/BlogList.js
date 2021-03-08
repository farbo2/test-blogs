import { Link } from "react-router-dom";
//import Components
import Boxx from "./‌Boxx";

const BlogList = ({blogs}) => {

    return (
        <div className="blog-list">

<article className="contentContainerTagName">
            
            {  blogs.map((blog) => (
                
               <Boxx id = {blog.id} abstract = {blog.abstract} title = {blog.title} body={blog.body} /> 
            ))}
            
 
         </article>

        </div>
    );
}
 
export default BlogList;