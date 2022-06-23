import React from "react";
import {MoreInfo} from "./MoreInfo";

const Trip = (props) => {

  // ? Mapping out the input [trips] *prop* values and converting each of them into a [HTML] div 
  const items = props.trips.map((place) => (
    <div>

      <h4>{place["sno"]}</h4>
      <h4>{place["title"]}</h4>
      <h6>{place["desc"]}</h6>
    </div>
  ));
  return (
    <div className="container">
      <h2 className="text-center">Trips</h2>
      {items}
      <MoreInfo trip={props.trips[0]}/>
    </div>
  );
};

export default Trip;
