import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { addCard } from '../../actions';
import CardList from '../../components/CardList.js';


class App extends Component {
  constructor(){
    super();
    this.State = {
      cardValue: ""
    }
  }

  handleNewCardSubmit( event ) {
    console.log( 'submit' );
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
        <CardList
          cards= { this.props.cards }
        />
        <input
          type="text"
          placeholder="new card"
          onChange={this.handleNewCardInput.bind(this)}
        />
        <button onClick={this.handleNewCardSubmit.bind(this)}>New Card</button>
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
