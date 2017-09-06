import React, { Component } from 'react';
import { connect } from 'react-redux';

import Column from '../../components/Column/Column.js';
/*import { getCards } from '../../actions/index.js';
*/
class Kanban extends Component {
  constructor(){
    super();
    this.state = {
      queue: [],
      inProgress: [],
      Complete: []
    };
  }
  queryDatabaseForCards(){
    return this.props.getCards();
  }

  sortTasksToColumns( columnStatus, props ) {
    let cardArray = this.queryDatabaseForCards();
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
    console.log('will mount this.props', this.props);
    this.updateColumnArrays(this.props);
  }

  componentWillReceiveProps( nextprops ) {
    this.updateColumnArrays(nextprops);
  }

  render() {
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
/*
const mapDispatchToProps = ( dispatch ) => {
  return {
/*    getCards : () => {
      dispatch( getCards() )
    }
  }
}

const ConnectedKanban = connect(
  null,
  mapDispatchToProps
)( Kanban );

export default ConnectedKanban;
*/

//problem is db receiving is firing async, and arriving after render.

export default Kanban;