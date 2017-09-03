import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addCard } from '../../actions';
import NewCardForm from '../NewCardForm/NewCardForm.js';
import Kanban from '../Kanban/Kanban.js';

class App extends Component {
  constructor(){
    super();
    this.State = {
    }
  }


  render() {
    console.log( 'store', this.props.cards );
    return (
      <div>

        <div className="header">
          <h1>Kanban React</h1>
        </div>

        <Kanban
          cards={this.props.cards}
        />

        <NewCardForm
          addCard={this.props.addCard}
        />

      </div>
    );
  }
}
//transfers store info to props
const mapStateToProps = ( state ) => {
  return {
    cards: state.cards
  };
};
//this allows components to dispatch actions to reducer
const mapDispatchToProps = ( dispatch ) => {
  return {//when you call this.props.addCard, its calling this.
    addCard: (card) => {
      dispatch(addCard(card))
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;