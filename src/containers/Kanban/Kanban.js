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

  sortTasksToColumns( columnStatus, props ) {
    let cardArray = this.props.cards.cards;
    console.log( "cardArray", cardArray );
    let array = cardArray.filter( ( { status } ) => {
      return status === columnStatus;
    } );
    return array;
  }

  updateColumnArrays(props){
    this.setState( {
      queue: this.sortTasksToColumns( "Queue", props ),
      inProgress: this.sortTasksToColumns( "In Progress", props ),
      Complete: this.sortTasksToColumns( "Complete", props )
    } );
  }

  componentWillMount() {
    this.updateColumnArrays(this.props);
  }

  componentWillReceiveProps( nextprops ) {
    this.updateColumnArrays(nextprops);
  }

  render() {
    console.log( "kanban state", this.state );
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