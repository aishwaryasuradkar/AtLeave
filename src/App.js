import "./App.css";
import HomeView from "./views/Home.view";
import {Routes, Route} from 'react-router-dom'



// We wrote trips and Footer in the curly bracket because they are not default
//in our code. Go to header.js and see that the method used is default hence we didn't remove header in curly bracketsS

export default function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomeView/>}/>
    </Routes>
  );
}
