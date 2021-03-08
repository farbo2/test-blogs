//import hooks
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Create = () => {
    //states
    const [title , setTitle ] = useState('')
    const [abstract , setAbstract ] = useState('')
    const [body , setBody ] = useState('')

    //hook for redirect after sending data
    const History = useHistory()

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title , abstract , body }
        
        //post data 
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "Application/json"},
            body : JSON.stringify(blog)
        })
        .then(() => {
            //redirect to home page
            History.push('/')
        }) 
    }

    return (
        <div className="create">

        
        <h2>افزودن مطلب جدید</h2>
        
        <form onSubmit={handleSubmit}>
            <label>عنوان مطلب:</label>
            <input 
            type="text"
            value={title}
            onChange = {(e) => setTitle(e.target.value)}
            required
            ></input>
            
            <label>چکیده:</label>
            <textarea 
                value={abstract}
                onChange={(e)=> setAbstract(e.target.value)}
                required
            >

            </textarea>

            <label>متن:</label>
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)} 
                required
            >
                
            </textarea>

            <button>افزودن</button>

            </form>

            </div>
    );
}
 
export default Create;