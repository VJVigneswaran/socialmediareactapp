import {createContext } from "react";
import useAxiosFetch from "../Hooks/useAxiosFetch";
import {format} from "date-fns"
import { useEffect, useState } from "react";
import api from "../apiRequest";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider =({children})=>{
  const [posts,setPosts]= useState([]);
  const [search,setSearch] = useState("");
  const [posttitle,setPostTitle] = useState("");
  const [postbody,setPostBody] = useState("");
  const [editposttitle,setEditPostTitle] = useState("");
  const [editpostbody,setEditPostBody] = useState("");
  const navigate = useNavigate();
  const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts"); 
  
  useEffect(()=>{
    setPosts(data);
  },[data])

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredPost =  posts.filter((post)=> post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase()) ? post : null)
    setPosts(filteredPost);
    navigate('/')
  }

  const handleAddPost = async(e) => {
    e.preventDefault();
    const datetime = format(new Date(),"MMMM dd, yyyy hh:mm:ss a");
    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 : 1;
    console.log(id);
    const newPost = {id:id, title: posttitle, datetime: datetime , body: postbody};
    const response = await api.post('/posts', newPost);
    const allPosts = [...posts, response.data];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate('/');
  }

  const handleDelete = async (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
     await api.delete(`/posts/${id}`);
    setPosts(filteredPosts);
    navigate('/');
  }
 
  const handleEditPost = async(id) =>{
    const datetime = format(new Date(),"MMMM dd, yyyy hh:mm:ss a");
    const newPost = {id, title: editposttitle, datetime: datetime , body: editpostbody};
    const response = await api.put(`/posts/${id}`, newPost);
    setPosts(posts.map(post => post.id===id ? {...response.data}: post));
    setEditPostTitle("");
    setEditPostBody("");
    navigate('/');
  }    
return (
    <DataContext.Provider value={{
        handleDelete,handleSearch,search,setSearch,posts,fetchError,
        isLoading,handleAddPost,posttitle,setPostTitle,postbody,
        setPostBody,handleEditPost,editposttitle, editpostbody,setEditPostBody,setEditPostTitle

    }}>
        {children}
    </DataContext.Provider>
)
}

export default DataContext