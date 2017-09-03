import React, { Component } from 'react';
import { connect } from 'react-redux';
import { advanceCard } from '../../actions/';

class Card extends Component {

  handleTaskAdvance(){
    console.log( "handleTaskAdvance", this.props.card );
    this.props.advanceCard( this.props.card );
  }

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
        <button type="button" onClick={this.handleTaskAdvance.bind(this)}>next</button>
        <br />
      </div>
    );
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    advanceCard: ( card ) => {
      console.log( 'dispatch card', card );
      dispatch( advanceCard( card ) )
    }
  };
};

const ConnectedCard = connect(
  null,
  mapDispatchToProps
)(Card);

export default ConnectedCard;