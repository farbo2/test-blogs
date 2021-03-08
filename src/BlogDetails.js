//import hooks
import { useParams } from "react-router-dom";
import { useState } from 'react'
import useFetch from './usefetch'
import {useHistory} from 'react-router-dom'

const BlogDetails = () => {
    //use history for redirect to home page
    const History = useHistory()
    const { id } = useParams()
    //get data by Custom Hook : useFetch
    const {data : blog , isLoading , error } = useFetch('http://localhost:8000/blogs/' + id);

    //delete post and then redirect to home page
    const Deletepost = () => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: 'DELETE'
        }).then(()=> {
            History.push('/')
        })
        
    }

    return (

        <div className="blog-details">

            {error && <div> {error} </div>}
            {isLoading && <div className="loader-parent"><p>صفحه درحال بارگزاری است</p><div className="loader"></div></div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <hr/>
                    <button onClick={Deletepost}>حذف مطلب </button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;