import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewCardForm extends Component {
  constructor(){
    super();
    this.State = {
      cardValue: ""
    };
  }

  handleNewCardSubmit( event ) {
    console.log( 'submit', this.props );
    this.props.addCard( this.state.cardValue );
  }

  handleNewCardInput( event ) {
    console.log( event.target.value );
    this.setState({
      cardValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="new card"
          onChange={this.handleNewCardInput.bind(this)}
        />
        <button onClick={this.handleNewCardSubmit.bind(this)}>New Card</button>
      </div>
    );
  };
};

export default NewCardForm;