import React from 'react'

const post = {
    "id": 1,
    "description": "Me playing squash a few year ago ",
    "like": 20,
    "author": null,
    "published_at": "2021-06-25T07:19:04.341Z",
    "created_at": "2021-06-25T07:10:05.037Z",
    "updated_at": "2021-06-25T07:19:04.386Z",
    "image":{
            "url": "/uploads/Squash_11a30ca99e.jpg",
    }
}

const API_URL = 'http://localhost:1337'

const formatImageUrl = (url) => `${API_URL}${url}` 

export default ({description, Like, url}) => {
 
    return (
     <div className="Post">  
        <img className="Post_Image" src={formatImageUrl(url)}/>
         <h4>{description}</h4>
         <div>
             <span>Like : {Like} </span>
         </div>
    </div>



    )
}

   


