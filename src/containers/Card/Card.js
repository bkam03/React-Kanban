import React, { Component } from 'react';
import { connect } from 'react-redux';
import { advanceCard, regressCard } from '../../actions/';

class Card extends Component {

  handleTaskAdvance(){
    console.log( "handleTaskAdvance", this.props.card );
    this.props.advanceCard( this.props.card );
  }
  handleTaskRegress(){
    console.log( "handleTaskRegress", this.props.card );
    this.props.regressCard( this.props.card );
  }

  render(){
    let card = this.props.card;
    return (
      <div>
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
        <div>
          <button type="button" onClick={this.handleTaskRegress.bind(this)}>back</button>
          <button type="button" onClick={this.handleTaskAdvance.bind(this)}>next</button>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    advanceCard: ( card ) => {
      console.log( 'dispatch card', card );
      dispatch( advanceCard( card ) );
    },
    regressCard: ( card ) => {
      console.log( 'dispatch card', card );
      dispatch( regressCard( card ) );
    }
  };
};

const ConnectedCard = connect(
  null,
  mapDispatchToProps
)(Card);

export default ConnectedCard;