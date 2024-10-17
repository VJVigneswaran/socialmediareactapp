import { Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Nav from "./Nav";
import Missing from "./Missing.js";
import Post from "./Post.js";
import NewPost from "./NewPost.js";
import EditPost from "./EditPost.js";
import { DataProvider } from "./Context/DataContext.js";

function App() { 
  return (
    <div className="App">
          <Header/>
          <DataProvider>
          <Nav/>
          <main>
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "post">
              <Route index element={<NewPost />}/>
              <Route path =":id"  element={<Post />}/>
            </Route>
              <Route path="/editpost/:id" element={<EditPost />}/> 
              <Route path = "about" element={<About/>}/>
              <Route path = "*" element={<Missing/>}/>
          </Routes>
          </main>
          </DataProvider> 
        <Footer/>
    </div>
  );
}

export default App;
