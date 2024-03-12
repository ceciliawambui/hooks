// Fetching data from apis using hooks
// Axios package is used, - npm install axios


import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    // state variable
    const [post, setPost] = useState({})

    const[id, setId]= useState(1)

    const [idFromButtonClick, setIdFfromButtonClick] = useState(1)

    const handleClick=()=>{
        setIdFfromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}></input>

        {/* fetching data from a button click using the idfrombuttonclick */}
        <button type='button' onClick={handleClick}>Fetch Post</button>

        <div>{post.title}</div>
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            }
        </ul> */}
    </div>
  )
}

export default DataFetching