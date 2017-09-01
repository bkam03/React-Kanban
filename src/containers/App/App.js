import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addCard } from '../../actions';
import CardList from '../../components/CardList.js';

class App extends Component {
  render() {
    console.log( 'props', this.props);
    return (
      <CardList
        cards= { this.props.cards }
      />
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
