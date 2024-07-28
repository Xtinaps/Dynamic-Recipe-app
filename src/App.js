import logo from './logo.svg';
import './App.css';
import AddRecipie from './components/AddRecipie';
import SearchRecipe from './components/SearchRecipe';
import ViewRecipe from './components/ViewRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddRecipie/>}/>
    <Route path='/View' element={<ViewRecipe/>} />
    <Route path='/Search' element={<SearchRecipe/>}/>

   </Routes>
   </BrowserRouter>
  );
}

export default App;