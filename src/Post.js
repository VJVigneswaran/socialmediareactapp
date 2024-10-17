import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './Context/DataContext';


const Post = () => {
  const{posts,handleDelete} = useContext(DataContext);
  const {id} = useParams();
  console.log(typeof id);
  const post = posts.find(post => (post.id).toString() === id); 
  return (
    <main>
      <div className='card'>
        {post &&
            <>
              <h2>{post.title}</h2>
              <p>{post.datetime}</p>
              <p>{post.body}</p>
              <button onClick={()=>handleDelete(post.id)}>Delete</button>
              <button><Link to={`/editpost/${post.id}`}>Edit</Link></button>
            </>
        }
        {!post &&  
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing</p>
            </>
        }
      </div>
    </main>
  )
}

export default Post