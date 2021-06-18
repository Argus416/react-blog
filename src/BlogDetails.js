import { useHistory, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';

const BlogDetails = () => {
    const { id } = useParams();
    const url = "http://localhost:8080/blogs/" + id;
    const urlEdit = "http://localhost:8080/edit/" + id;
    const { data: blog, isPending, error  } = useFetch(url);
    const history = useHistory();
    const deleteBlog = () =>{
        fetch(url, {
            method: "DELETE",
        }).then(() =>{
            alert('blog deleted')
            history.push('/');
        })
    }


    return ( 
        <div className="Blog-details">
        {error && <p>{error}</p>}
        { isPending && <p>Loading...</p> }
        {blog && 
            <article>
                <header className="d-flex justify-content-between">
                    <div className="d-flex text-align-center">
                        <h2>{ blog.title }</h2>
                        <div className="icons">
                            <FaTrash className="fw" onClick={deleteBlog}/>
                        </div>
                    </div>
                    <div className="d-flex text-align-center">
                        <span className="author">Author:   </span>
                        <strong>{ blog.author }</strong>
                    </div>
                </header>
                <p>{ blog.body }</p>
            </article>
        }
        
        </div>
    );
}
 
export default BlogDetails;