import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from './Context/DataContext';

const Home = () => {

  const {posts,isLoading,fetchError} =useContext(DataContext);

  return (
    <>
    {isLoading ? <p>Loading posts...</p> : !isLoading && fetchError ? <p style={{color:"red",fontSize:"2rem"}}>{fetchError}</p>
    : !isLoading && !fetchError && posts.length ? 
      <ul>
        {posts.map((post)=> <Link to={`post/${post.id}`} key={post.id}><li  className="postCard">
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
        </li></Link>
      )}
      </ul>:<p style={{color:"green",fontSize:"2rem"}}>No posts to display.Add a post</p>}
      </>
  )
}

export default Home