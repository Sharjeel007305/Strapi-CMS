import React, {useState, useEffect, useContext} from 'react'
import Post from '../components/Post'

import {UserContext} from '../context/UserContext'

export default ({match, history}) => {

    const {id} = match.params  
    console.log("id", id)

    const {user, setUser} = useContext(UserContext)
    console.log("user", user)
    console.log("setUser", setUser)

    const [post, setpost] = useState({})
    const [loading,setloading] =useState(true)
    const [edit, setEdit]= useState(false)


    //used for the edit form
    const [description,setDescription] = useState('')

    const fetchPost = async() => {
        setloading(false)
        const response = await fetch(`http://localhost:1337/posts/${id}`)
        const data = await response.json()
        console.log("data", data)
        setpost(data)
        setDescription(data.description)
        setloading(false)

    }

    const handleDelete = async() => { 
        const response = await fetch (`http://localhost:1337/posts/${id}`, {
            method : 'DELETE'
        })
        const data = await response.json()
        history.push('/')
    }

    const handleEditSubmit = async (event) => {
        event.preventDefault()
        console.log("handleEditSubmit")

        const response = await fetch(`http://localhost:1337/posts/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                description
            })
        })

        const data = await response.json()
        fetchPost()
        console.log("handleEditSubmit data", data)
    }

    useEffect(()=>{
        fetchPost()
    }, [])

    return(
    <div>
        {loading &&
            <p>Loading...</p>
        }
        {!loading &&
            <>
                {post.id &&
                    <>
                        <Post 
                        description={post.description}
                        url = {post.image && post.image.url}
                        Like={post.like}
                         />
                        <button onClick={handleDelete}>Delete this post</button>
                        <button onClick={()=> setEdit(true)}>Edit this Post</button>
                        {edit &&
                            <form onSubmit={handleEditSubmit}>
                                <input 
                                    value={description}
                                    onChange ={(event)=>setDescription(event.target.value)} 
                                    placeholder="New description"
                                />
                                <button>Confirm</button>
                            </form>
                            }
                    </>
                }
                {!post.id &&
                <p>404 - not found</p>
                }
            </>
        }
     
    </div>
     )


}

    
