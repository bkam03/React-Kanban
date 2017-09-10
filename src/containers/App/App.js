import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addCard, getCards } from '../../actions/index.js';
import NewCardForm from '../NewCardForm/NewCardForm.js';
import Kanban from '../Kanban/Kanban.js';

class App extends Component {
  constructor(){
    super();
    this.State = {
    }
  }


  render() {
    console.log( 'render in app', this.props.cards );
    return (
      <div className="content">

        <div className="header">
          <h1>Kanban React</h1>
        </div>

        <Kanban
          cards={this.props.cards}
        />

        <NewCardForm

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
/*//this allows components to dispatch actions to reducer
const mapDispatchToProps = ( dispatch ) => {
  return {//when you call this.props.addCard, its calling this.
    addCard: (card) => {
      dispatch(addCard(card))
    },
    getCards: () => {
      dispatch( getCards() )
    }
  };
};
*/
const ConnectedApp = connect(
  mapStateToProps,
  null
)(App);

export default ConnectedApp;