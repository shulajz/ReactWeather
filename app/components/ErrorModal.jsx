var createReactClass = require('create-react-class');
var React = require('react');

var ErrorModal = createReactClass({
  getDefaultProps: function() {
    return{
      title: 'Error',
    };
  },

  // propTypes: {
  //   title: React.PropTypes.string,
  //   message: React.PropTypes.string.isRequired
  // },

  componentDidMount: function (){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },


  render: function() {
    var {title, message} = this.props;
    return (
      <div id="error-modal"
        className="reveal tiny text-center"
         data-reveal="">
        <h4>{{Title}}</h4>
        <p>{{message}}</p>
        <p>
        <button className="button hollow" data-close>
          Okay
        </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
