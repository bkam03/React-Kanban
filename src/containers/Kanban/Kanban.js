import React, { Component } from 'react';
import { connect } from 'react-redux';

import Column from '../../components/Column/Column.js';
import { getCards } from '../../actions/index.js';

class Kanban extends Component {
  constructor(){
    super();
    this.state = {
      Queue: [],
      InProgress: [],
      Complete: []
    };
  }

  componentWillMount() {
    this.setState( {
      cards: this.props.getCards()
    } );
  }

  componentWillReceiveProps( {cards} ) {
    console.log( 'kanban new props', cards );
    this.setState({
      Queue: cards.Queue,
      InProgress: cards.InProgress,
      Complete: cards.Complete
    });

  }

  render() {
    return (
      <div className="todo-list">
        <Column
          cards= { this.state.Queue }
          columnName="Queue"
        />
        <Column
          cards= { this.state.InProgress }
          columnName="InProgress"
        />
        <Column
          cards= { this.state.Complete }
          columnName = "Complete"
        />
      </div>
    );
  }
}

export default Kanban;