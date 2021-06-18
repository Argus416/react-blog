import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const name = 'Mohamad';
    const title = 'All blogs !';
    const [name, setName] = useState('Mario');
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
    
    const deleteBlog = id =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    const changeName = () =>{
        setName('Luigi');
    }
    
    useEffect(()=>{
        console.log('use effect ran')
    },[name])

    return (
        <div className="home">
            <BlogList blogs={blogs} title= {title} deleteBlog = {deleteBlog} />
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title= "Marios's blogs" /> */}
            <button onClick = {changeName}>Change Name</button>
            <small>{ name }</small>
        </div>
      );
    }
     
    export default Home;