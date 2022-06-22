import React from "react";

const Trip = (props) => {

  // ? Mapping out the input [trips] *prop* values and converting each of them into a [HTML] div 
  const items = props.trips.map((place) => (
    <>
      <h4>{place["sno"]}</h4>
      <h4>{place["title"]}</h4>
      <h6>{place["desc"]}</h6>
    </>
  ));
  return (
    <div className="container">
      <h2>Trips</h2>
      {items}
    </div>
  );
};

export default Trip;
