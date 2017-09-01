import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addCard } from '../../actions';
import CardList from '../../components/CardList.js';
import NewCardForm from '../NewCardForm/NewCardForm.js';


class App extends Component {
  constructor(){
    super();
    this.State = {
    }
  }



  render() {
    return (
      <div>
        <CardList
          cards= { this.props.cards }
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


/* keep state separated
for columns
todos: [],
inProgress: [],
done: []
*/