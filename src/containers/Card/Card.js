import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {

  render(){
    let card = this.props.card;
    return (
      <div>
        Title: {card.title}
        <br />
        Priority: {card.priority}
        <br />
        Status: {card.status}
        <br />
        createdBy: {card.createdBy}
        <br />
        assignedTo: {card.assignedTo}
        <br />
      </div>
    );
  }
};

export default Card;