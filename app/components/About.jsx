var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
    <h1 className="text center page-title">About Component</h1>
    <p>This is a weather app ok?</p>
    <p>here are some of the tools</p>
    <ul>
      <li>
        <a href="https://facebokk.github.io/react">React</a> - this was the js fw used
      </li>

    </ul>
    </div>
  )
};

module.exports = About;
