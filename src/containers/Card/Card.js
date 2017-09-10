import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  advanceCard,
  regressCard,
  ADVANCE_CARD,
  REGRESS_CARD
} from '../../actions/';
import './Card.css';

class Card extends Component {

  handleTaskAdvance(){
    let cardAndVelocity = {
      card: this.props.card,
      direction: ADVANCE_CARD
    };
    this.props.advanceCard( cardAndVelocity );
  }
  handleTaskRegress(){
    let cardAndVelocity = {
      card: this.props.card,
      direction: REGRESS_CARD
    };
    this.props.regressCard( cardAndVelocity );
  }

  render(){
    let card = this.props.card;

    return (
      <div className='cardContainer'>
        <div className={card.priority}>
          <div className="details">
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
          <div className="controls">
            <button type="button" onClick={this.handleTaskRegress.bind(this)}>back</button>
            <button type="button" onClick={this.handleTaskAdvance.bind(this)}>next</button>
          </div>
        </div>
      </div>
    );
  }
};


const mapDispatchToProps = ( dispatch ) => {
  return {
    advanceCard: ( card ) => {
      dispatch( advanceCard( card ) );
    },
    regressCard: ( card ) => {
      dispatch( regressCard( card ) );
    }
  };
};

const ConnectedCard = connect(
  null,
  mapDispatchToProps
)(Card);

export default ConnectedCard;