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
/*

  sortTasksToColumns( columnStatus, props ) {
    let cardArray = this.props.getCards();
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
  }*/

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
/*    this.updateColumnArrays(nextprops);
    this.setState( {
      queue: cards
    } ); */
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


/*const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    getCards : () => {
      dispatch( getCards() )
    }
  }
}

const ConnectedKanban = connect(
  mapStateToProps,
  mapDispatchToProps
)( Kanban );

export default ConnectedKanban;*/


//problem is db receiving is firing async, and arriving after render.

export default Kanban;