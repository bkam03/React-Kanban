import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewCardForm extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      priority: "",
      status: "Queue",
      createdBy: "",
      assignedTo: ""
    };
  }
/*how submit title, make form to create new card.
get this field to work first, then make the others.
*/
  handleNewCardSubmit( event ) {
    console.log( 'submit', this.state );
    this.props.addCard( this.state );
  }

  handleInput( event ) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log( this.state.title );
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="title"
          name='title'
          onChange={this.handleInput.bind(this)}
        />
        <button onClick={this.handleNewCardSubmit.bind(this)}>New Card</button>
      </form>
    );
  };
};

export default NewCardForm;