import Header from "../MyComponents/Header";
import Trip from "../MyComponents/Trips";
import { Add } from "../MyComponents/Add";
import Footer from "../MyComponents/Footer";

export default function HomeView() {
    const trips = [
    {
      sno: 1,
      title: "Kedarnath",
      desc: "June, July , August three branchDestination - Haridwar to Haridwar Guptkashi , Kedarnath Rishikesh ,Laxman jhula Local Haridwar Days - 4 Days, 3  nights  Stay - 2 Night Hotel 1 Night Camping At Kedarnath meals- Dinner, Breakfast Traveling - private transportation based upon group size package per head - 8000 only what are you waiting for get your group ready and book your ticket fast ",
    },
    {
      sno: 2,
      title: "Manali",
      desc: "To Manali And Kasol🌻Days - 5 Days | 4Nights 🌌From - delhi To DelhiTransportation - Private Vehicle (based upon group size) 🚌3 Star Hotel - Manali 🏩Rooms - Double/ Triple Sharing 👬👭Tents - Kasol camping ⛺Meals - Breakfast and dinner ( In Hotels and camping ) 🥙🥘Package per head - 6999 onlyWhich includesTraveling by private vehicle 🚌| 3 star hotel stay🏩 | Breakfast and dinner🍝 | Sightseeing 🔭 |Camping ",
    },
    {
      sno: 3,
      title: "Manali and Kasol",
      desc: "Days -  5 Days | 4 Nights 🌌From - Pickup Delhi Drop - DelhiTransportation - Private Vehicle  🚌3 Star Hotel - Manali 🏩Rooms - Super Deluxe -  Triple / quad sharing👭Bonfire,Tents - Kasol camping ⛺Meals - Breakfast and dinner ( In Hotels and camping ) 🥙🥘 Package  - 6999 only (per head)Which includesTraveling by private vehicle 🚌| 3 star hotel stay🏩 | Breakfast and dinner🍝 | Sightseeing 🔭 | Camping | Music | Bonfire- 3 Breakfast - 3 Dinner - Starters at New Year ",
    },

  ];
  return (
    <div>
        <Header searchBar={true} title={"Title goes in here"} />
      <Trip trips={trips}/>
      <Add/ >     <Footer />
    
    <div className="wrapper">
    <h1>Application</h1>
    
    </div>
  </div>);
}