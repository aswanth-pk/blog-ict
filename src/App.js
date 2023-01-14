import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPosts from './Components/BlogPosts';
import AddPosts from './Components/AddPosts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<BlogPosts />} />
        <Route path='/addposts' exact element={<AddPosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
