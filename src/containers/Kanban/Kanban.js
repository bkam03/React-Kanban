import React, { Component } from 'react';
import { connect } from 'react-redux';

import Column from '../../components/Column/Column.js';


class Kanban extends Component {
  constructor(){
    super();
    this.state = {
      queue: [],
      inProgress: [],
      Complete: []
    };
  }

  sortTasksToColumns( columnStatus ) {
    let cardArray = this.props.cards.cards;
    let array = cardArray.filter( ( { status } ) => {
      return status === columnStatus;
    } );
    return array;
  }

  updateColumnArrays(){
    this.setState( {
      queue: this.sortTasksToColumns( "Queue" ),
      inProgress: this.sortTasksToColumns( "In Progress" ),
      Complete: this.sortTasksToColumns( "Complete" )
    } );
  }

  componentWillMount() {
    this.updateColumnArrays();
  }

  componentWillUpdate() {
    this.updateColumnArrays();
  }

  render() {
    console.log( this.state.queue)
    return (
      <div className="todo-list">
        <Column
          cards= { this.state.queue }
          columnName="Queue"
        />
        <Column
          cards= { this.state.inProgress }
          columnName="In Progress"
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