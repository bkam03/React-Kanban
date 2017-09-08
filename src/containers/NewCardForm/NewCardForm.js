import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/index.js';

class NewCardForm extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      priority: "",
      status: "Queue",
      createdBy: "",
      assignedTo: ""
    };
  }
/*how submit title, make form to create new card.
get this field to work first, then make the others.
*/
  handleNewCardSubmit( event ) {
    console.log( 'submit', this.state );
    this.props.addCard( this.state );
    this.setState({
      title: "",
      priority: "",
      createdBy: "",
      assignedTo: ""
    });
    console.log( 'newcardform state', this.state );
  }

  handleInput( event ) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    let fieldNames = [ 'title', 'priority', 'createdBy', 'assignedTo' ];
    return (
      <form>
        {
          fieldNames.map( ( fieldName ) => {
            return (
              <div>
                <label for={ fieldName }>{ fieldName }</label>
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
        <br />
        <button type="button" onClick ={this.handleNewCardSubmit.bind(this)}>New Card</button>
      </form>
    );
  };
};

//export default NewCardForm;

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

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCardForm);

export default ConnectedForm;