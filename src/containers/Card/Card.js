import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  advanceCard,
  regressCard,
  ADVANCE_CARD,
  REGRESS_CARD,
  editCard,
  EDIT_CARD
} from '../../actions/';
import './Card.css';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      priority: "",
      createdBy: "",
      status: "",
      assignedTo: "",
      id:""
    };
  }

  componentWillMount() {
    let card = this.props.card;
    this.setState( {
      title: card.title,
      status: card.status,
      priority: card.priority,
      createdBy: card.createdBy,
      assignedTo: card.assignedTo,
      id: card.id
    } );
  }

  handleTaskAdvance(){

    let cardAndVelocity = {
      card: this.props.card,
      direction: ADVANCE_CARD
    };
    this.props.advanceCard( cardAndVelocity );
  }
  handleTaskRegress(){
    let cardAndVelocity = {
      card: this.props.card,
      direction: REGRESS_CARD
    };
    this.props.regressCard( cardAndVelocity );
  }



  handleInput( event ) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  displayEditMenu(){
    let cardId = this.props.card.id;
    let cardEditFormContainer = document.getElementById( cardId );
    cardEditFormContainer.className = 'editShown';
    let editButtonOnCard = document.getElementById( cardId + "edit" );
    editButtonOnCard.className = 'editHidden';
  }

  handleEditCard(){
    let cardId = this.props.card.id;
    let cardEditFormContainer = document.getElementById( cardId );
    cardEditFormContainer.className = 'editHidden';
    let editButtonOnCard = document.getElementById( cardId + "edit" );
    editButtonOnCard.className = 'editShown';

    this.props.editCard( this.state );
  }


  render(){
    let card = this.props.card;
    let fieldNames = [ 'title', 'createdBy', 'assignedTo' ];

    return (
      <div className={card.priority}>
        <div className='cardContainer'>
          <div className="details">
            Title: {card.title}
            <br />
            Priority: {card.priority}
            <br />
            Status: {card.status}
            <br />
            createdBy: {card.createdBy}
            <br />
            assignedTo: {card.assignedTo}
            <br />
          </div>
          <div class="editContainer">

            <button type='button' id={card.id + "edit"}onClick={ this.displayEditMenu.bind( this ) }>Edit</button>

            <div className='editHidden' id={ card.id }>
            {
              fieldNames.map( ( fieldName ) => {
                return (
                    <div>
                      <label for={ fieldName }>{ fieldName }</label>
                      <br />
                      <input
                        type="text"
                        placeholder={ fieldName }
                        name={ fieldName }
                        id={ fieldName }
                        value={this.state[fieldName]}
                        onChange={this.handleInput.bind(this)}
                      />
                    </div>
                );
              } )
            }
            <div>
             <label for="priority">Priority</label>
             <br />
                    <select name="priority" onChange={this.handleInput.bind(this)}>
                      <option value='low'>Low</option>
                      <option value='medium'>Medium</option>
                      <option value='high'>High</option>
                      <option value="blocker">Blocker</option>
                    </select>
            </div>
            <br />
              <button type='button' onClick={ this.handleEditCard.bind( this ) }>Change</button>
            </div>
          </div>
          <div className="controls">
            <button type="button" onClick={ this.handleTaskRegress.bind(this ) }>back</button>
            <button type="button" onClick={ this.handleTaskAdvance.bind( this ) }>next</button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ( state ) => {
  return {
    cards: state.cards
  };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    advanceCard: ( card ) => {
      dispatch( advanceCard( card ) );
    },
    regressCard: ( card ) => {
      dispatch( regressCard( card ) );
    },
    editCard: ( card ) => {
      dispatch( editCard( card ) );
    }
  };
};

const ConnectedCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default ConnectedCard;