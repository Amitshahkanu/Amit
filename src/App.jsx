import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./User/Layout/Layout"
import { About } from "./User/About/About"
import Home from "./User/Home/Home";
import SingleBlog from "./User/Blog/SingleBlog";
import AdminLayout from "./Admin/AdminLayout";  
import Adminblogs from "./Admin/Home/Adminblogs";
import AddBlog from "./Admin/Blog/AddBlog";
import EditBlog from "./Admin/Blog/EditBlog";





function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog/:id" element={<SingleBlog />} />
          </Route>
        
          <Route path="/admin/" element={<AdminLayout />} >
          <Route path="home" element={<Adminblogs />} />
          <Route path= "blog" element={<AddBlog/>} />
          <Route path="edit/:id" element={<EditBlog/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
