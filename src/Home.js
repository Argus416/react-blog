import BlogList from "./BlogList";
import useFetch from "./hooks/useFetch";
const Home = () => {
   
    const url = "http://localhost:8080/blogs";
    const  {data : blogs , isPending, error} = useFetch(url);
    
    return (
        <div className="home">
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs}   />}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'mario')} title= "Marios's blogs" /> */}
        </div>
    );
}
     
export default Home;