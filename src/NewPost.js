import React, { useContext } from 'react'
import DataContext from './Context/DataContext'

const NewPost = () => {
  
  const {handleAddPost,posttitle,setPostTitle,postbody,setPostBody} = useContext(DataContext)

  return (
    <form className='newpostform' onSubmit={(e) => handleAddPost(e)}>
    <h2>Create New Post</h2>
        <label htmlFor='title'>Title<input type='text' id='title' placeholder='Enter a title' value={posttitle} onChange={(e)=>setPostTitle(e.target.value)}/></label>
        <label htmlFor='content'>Content<input type ="text" id='content' placeholder='Enter Message' value={postbody} onChange={(e)=>setPostBody(e.target.value)}/></label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default NewPost