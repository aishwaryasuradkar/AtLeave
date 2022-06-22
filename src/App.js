import './App.css';
import Header from "./MyComponents/Header";
import {Trips} from "./MyComponents/Trips";
import {Footer} from "./MyComponents/Footer";
// We wrote trips and Footer in the curly bracket because they are not default
//in our code. Go to header.js and see that the method used is default hence we didn;t wroye header in curly bracketsS


function App() {
  
    let trips=[
      {
      sno:1,
       title:"Kedarnath",
       desc:"June, July , August three branchDestination - Haridwar to Haridwar Guptkashi , Kedarnath Rishikesh ,Laxman jhula Local Haridwar Days - 4 Days, 3  nights  Stay - 2 Night Hotel 1 Night Camping At Kedarnath meals- Dinner, Breakfast Traveling - private transportation based upon group size package per head - 8000 only what are you waiting for get your group ready and book your ticket fast "
     },
     {
       sno:2,
       title:"Manali and Kasol",
     }
    ]
      
  
  
    return (
    <>
     <Header searchBar={false}/>
     <Trips trips={trips}/>
     <Footer/>
     </>
  );
}

export default App;
