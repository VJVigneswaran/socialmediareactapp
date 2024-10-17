import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const EditPost = () => {
 const {posts,editpostbody,editposttitle,setEditPostTitle,setEditPostBody,handleEditPost} = useContext(DataContext)
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  useEffect(()=>{
    if(post){
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  },[post,setEditPostBody,setEditPostTitle]);
  
  return (
    <form className='newpostform' onSubmit={(e) => e.preventDefault()}>
    <h2>Create New Post</h2>
        <label htmlFor='title'>Title<input type='text' id='title' placeholder='Enter a title' value={editposttitle} onChange={(e)=>setEditPostTitle(e.target.value)}/></label>
        <label htmlFor='content'>Content<input type ="text" id='content' placeholder='Enter Message' value={editpostbody} onChange={(e)=>setEditPostBody(e.target.value)}/></label>
        <button type='submit' onClick={()=> handleEditPost(post.id)}>Submit</button>
    </form>
  )
}

export default EditPost