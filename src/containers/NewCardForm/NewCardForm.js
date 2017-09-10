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

  handleNewCardSubmit( event ) {
    this.props.addCard( this.state );
    this.setState({
      title: "",
      priority: "",
      createdBy: "",
      assignedTo: ""
    });
  }

  handleInput( event ) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    let fieldNames = [ 'title', 'createdBy', 'assignedTo' ];
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
         <label for="priority">Priority</label>
                <select name="priority" onChange={this.handleInput.bind(this)}>
                  <option value='low'>Low</option>
                  <option value='medium'>Medium</option>
                  <option value='high'>High</option>
                  <option value="blocker">Blocker</option>
                </select>
        <button type="button" onClick ={this.handleNewCardSubmit.bind(this)}>New Card</button>
      </form>
    );
  };
};

const mapStateToProps = ( state ) => {
  return {
    cards: state.cards
  };
};
const mapDispatchToProps = ( dispatch ) => {
  return {
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