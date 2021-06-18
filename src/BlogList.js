import { Link } from 'react-router-dom';

const BlogList = ( { blogs, title } ) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
    <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <div className="left">
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </div>
                    <div className="right">
                        <Link className="button" to={`blogs/${blog.id}`} >show more</Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;