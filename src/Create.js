import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const url = "http://localhost:8080/blogs";
    
    const submitHandler = e => {
        e.preventDefault();
        const blog = { title, author, body };
        setIsPending(true);
        fetch(url, {
            method : "POST",
            headers : { "Content-type" : "application/json" },
            body : JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            setTitle('');
            setAuthor('');
            setBody('');
            history.push('/');
        })
    }

    return (
        <div className="create">
          <h2>Add a New Blog</h2>
          <form onSubmit={submitHandler}>
            <label>Blog title:</label>
            <input 
              type="text" 
              required 
              value={title}
              onChange={(e) => setTitle(e.target.value) }
            />

            <label>Blog author:</label>
            <select 
            value={author}
            onChange={(e) => setAuthor(e.target.value) }
            >
              <option value="" disabled defaultChecked></option>
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>

            <label>Blog body:</label>
            <textarea
              required
              rows="5"
              value={body}
              onChange={(e) => setBody(e.target.value) }
            ></textarea>
           
            { !isPending && <button className="button">Add Blog</button>}
            { isPending && <button className="button" disabled>Adding blog...</button>}          </form>
        </div>
    );
    }
     
export default Create;