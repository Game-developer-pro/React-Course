import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Product } from "./pages/Product";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { NotFound } from "./components/NotFound";
import { Navbar } from "./components/Navbar";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { SingleProduct } from "./pages/SingleProduct";
import { Register } from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { AddProduct } from "./components/AddProducts";


function App() {
  
  return (
    <>
     <Navbar />
   <Routes>
   
    <Route path="/" element={<Home />} />
    {/* <Route path="/product" element={<Product />} /> */}
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    {/* <Route path="/profile/:user" element={<Profile />} /> */}
    <Route path="*" element={<NotFound />} />
    <Route path="login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    {/* <Route path="/product/SingleProduct/:id" element={<SingleProduct />} /> */}
    <Route path="product" element={
      <ProtectedRoute>
        <Product />
      </ProtectedRoute>
    } />
    <Route path="profile/:user" element={
      <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="product/SingleProduct/:id" element={
          <ProtectedRoute>
            <SingleProduct />
          </ProtectedRoute>
        } />

        <Route path="addproduct" element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        } />

   </Routes>

   <Footer />
    </>
  )
}

export default App
