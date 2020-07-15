var React = require('react');

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;
  return(
      <h3 className="text-center">it is {temp} degrees inspect in  {location} </h3>
  )
};

module.exports = WeatherMessage;
