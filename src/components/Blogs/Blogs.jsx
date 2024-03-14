/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])
    
    return (
        <div className="w-2/3">
            <h1 className="text-4xl">total blog:{blogs.length}</h1>
            {
                blogs.map(blog=><SingleBlog blog={blog}key={blog.id} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></SingleBlog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;