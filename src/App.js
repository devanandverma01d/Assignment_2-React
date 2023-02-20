
// This is import area!
//1.impor {} from somelocation/ SomeLibrary
//2.impor from somelocation/ SomeLibrary
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';

function App() {
  // there are three memeber of Function component-
  //1.State
  //2.Function
  //3.Return statement
  return (
    //every function return something
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />}></Route>
            <Route path="post" element={<Post />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
//3. Export area
//3.1 Default export
//3.2 Named export
export default App;
